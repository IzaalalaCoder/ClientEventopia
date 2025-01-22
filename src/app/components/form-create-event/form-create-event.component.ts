import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-form-create-event',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-create-event.component.html',
  styleUrls: ['./form-create-event.component.css']
})
export class FormCreateEventComponent {
  @Output() closeForm = new EventEmitter<void>();
  @Output() added = new EventEmitter<void>();

  eventForm: FormGroup;

  constructor(private eventService: EventService) {
    this.eventForm = new FormGroup({
      label: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
    });
  }

  submit() {
    if (this.eventForm.invalid) {
      return;
    }

    const event: Event = new Event();
    event.label = this.eventForm.value.label;
    event.startDate = this.eventForm.value.startDate;
    event.endDate = this.eventForm.value.endDate;

    if (new Date(event.startDate) > new Date(event.endDate)) {
      return;
    }

    this.eventService.createEvent(event).subscribe(() => {
      this.added.emit();
    });
  }

  closeEventForm() {
    this.closeForm.emit();
  }
}