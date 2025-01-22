import { Component, EventEmitter, Output } from '@angular/core';
import { FormCreateEventComponent } from '../form-create-event/form-create-event.component';
import { FormCreateArtistComponent } from '../form-create-artist/form-create-artist.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [FormCreateEventComponent, FormCreateArtistComponent, CommonModule],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  isCreateEventOpen: boolean = false;
  isCreateArtistOpen: boolean = false;

  @Output() updateListE = new EventEmitter<void>();
  @Output() updateListA = new EventEmitter<void>();

  toggleEventCreateForm() {
    this.isCreateEventOpen = !this.isCreateEventOpen;
  }

  toggleArtistCreateForm() {
    this.isCreateArtistOpen = !this.isCreateArtistOpen;
  }

  updateListEvents() {
    this.updateListE.emit();
  }

  updateListArtists() {
    this.updateListA.emit();
  }
}
