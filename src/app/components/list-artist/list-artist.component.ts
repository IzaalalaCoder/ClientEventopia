import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArtistComponent } from '../artist/artist.component';
import { ArtistService } from '../../services/artist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-artist',
  standalone: true,
  imports: [CommonModule, ArtistComponent],
  templateUrl: './list-artist.component.html',
  styleUrls: ['./list-artist.component.css'],
  providers: [ArtistService]
})
export class ListArtistComponent {
  @Input() artists: any = {};
  @Output() update = new EventEmitter<void>();

  constructor(private artistService: ArtistService) {}

  loadArtists(): void {
    this.artistService.getAllArtists(this.artists.pageable.pageNumber).subscribe((data: any) => {
      this.artists = data;
    });
  }

  changePage(page: number): void {
    if (page >= 0 && page < this.artists.totalPages) {
      this.artists.pageable.pageNumber = page; 
      this.loadArtists();
    }
  }

  updateListArtists() {
    this.update.emit();
  }
}
