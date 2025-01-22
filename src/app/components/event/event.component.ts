import { EventService } from './../../services/event.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../../models/event.model';
import { FormEditEventComponent } from '../form-edit-event/form-edit-event.component';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, FormEditEventComponent],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  @Input({
    required: true
  }) event : Event = new Event();

  @Output() update = new EventEmitter<void>();

  eventSpecific: any = {};
  isEditOpen : boolean =  false;
  isViewOpen : boolean = false;

  constructor(private eventService : EventService) {
  }

  ngOnInit(): void {
    
  }

  updateEvent() {
    this.update.emit();
  }

  getSpecificEvent(id : string) {
    if (id == null) {
      return;
    }
    this.eventService.getSpecificEvent(id).subscribe((datas: any) => {
      this.eventSpecific = datas;
      this.isViewOpen = true;
    });
  }

  toggleEventEditForm() {
    this.isEditOpen = !this.isEditOpen;
  }

  removeEvent(id : string) {
    if (id == null) {
      return;
    }
    this.eventService.removeEvent(id).subscribe(() => {
      this.update.emit();
    });
  }

  // unlinkCategory(parentId : number, childId : number) {
  //   this.categoryService.unlinkCategory(parentId, childId).subscribe(() => {
  //     this.update.emit();
  //   });
  // }

  unViewEvent() {
    this.isViewOpen = false;
  }
}
