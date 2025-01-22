import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventService } from './services/event.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEventComponent } from './components/list-event/list-event.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { Event } from './models/event.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ListEventComponent, MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Eventopia';
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getAllEvents().subscribe((datas: any) => {
      this.events = datas.content;
    });
  }
}
