import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventComponent } from '../event/event.component';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-event',
  standalone: true,
  imports: [EventComponent, CommonModule],
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css',
  providers: [EventService]
})
export class ListEventComponent {
  @Input({
    required: true,
    alias: 'events'
  }) events : any = {};
  @Output() update = new EventEmitter<void>();

  constructor(private eventService: EventService) {}
  
    loadEvents(): void {
      this.eventService.getAllEvents(this.events.pageable.pageNumber).subscribe((data: any) => {
        this.events = data;
      });
    }
  
    changePage(page: number): void {
      if (page >= 0 && page < this.events.totalPages) {
        this.events.pageable.pageNumber = page; 
        this.loadEvents();
      }
    }

  updateListEvents() {
    this.update.emit();
  }
}
