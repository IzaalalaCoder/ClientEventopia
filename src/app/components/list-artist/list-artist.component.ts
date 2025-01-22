import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArtistComponent } from '../artist/artist.component';
import { ArtistService } from '../../services/artist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-artist',
  imports: [CommonModule, ArtistComponent],
  templateUrl: './list-artist.component.html',
  styleUrl: './list-artist.component.css',
  providers: [ArtistService]
})
export class ListArtistComponent {
  @Input({
    required: true,
    alias: 'artists'
  }) artists : any[] = [];
  @Output() update = new EventEmitter<void>();

  updateListArtists() {
    this.update.emit();
  }
}
