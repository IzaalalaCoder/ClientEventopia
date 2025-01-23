import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Event } from '../../models/event.model';
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

  submit() {
    if (this.eventForm.valid) {

      if (new Date(this.eventForm.value.startDate) > new Date(this.eventForm.value.endDate)) {
        return;
      }

      const event: Event = new Event();
      event.label = this.eventForm.value.label;
      event.startDate = this.eventForm.value.startDate;
      event.endDate = this.eventForm.value.endDate;

      if (this.event) {
        this.eventService.updateEvent(this.event.id, event).subscribe(() => {
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
