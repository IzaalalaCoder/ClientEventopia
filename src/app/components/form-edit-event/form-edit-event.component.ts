import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-edit-event',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-edit-event.component.html',
  styleUrls: ['./form-edit-event.component.css']
})
export class FormEditEventComponent implements OnInit {
  @Input() event: any = [];
  @Output() closeForm = new EventEmitter<void>();
  @Output() update = new EventEmitter<void>();

  events: any[] = [];
  eventForm: FormGroup = new FormGroup({
    label: new FormControl(""),
    startDate: new FormControl(""),
    endDate: new FormControl(""),
  });

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((datas: any[]) => {
      this.events = datas;
    });

    if (this.event) {
      this.eventForm.patchValue({
        label: this.event.label,
        startDate: this.event.startDate,
        endDate: this.event.endDate
      });
    }
  }

  private convertToDateFormat(date: string): string {
    const [day, month, year] = date.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }

  submit() {
    if (this.eventForm.valid) {
      const startDate = this.convertToDateFormat(this.eventForm.value.startDate);
      const endDate = this.convertToDateFormat(this.eventForm.value.endDate);

      if (new Date(startDate) > new Date(endDate)) {
        return;
      }

      if (this.event) {
        const updatedEvent = {
          ...this.eventForm.value,
          startDate: startDate,
          endDate: endDate
        };

        this.eventService.updateEvent(this.event.id, updatedEvent).subscribe(() => {
          this.update.emit();
          this.closeForm.emit();
        });
      }
    }
  }

  closeEventForm() {
    this.closeForm.emit();
  }
}
