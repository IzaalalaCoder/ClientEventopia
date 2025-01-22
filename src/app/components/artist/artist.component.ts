import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artist } from '../../models/artist.model';
import { FormEditArtistComponent } from '../form-edit-artist/form-edit-artist.component';
import { ArtistService } from './../../services/artist.service';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [CommonModule, FormEditArtistComponent],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {
  @Input({
    required: true
  }) artist : Artist = new Artist();

  @Output() update = new EventEmitter<void>();

  artistSpecific: any = {};
  isEditOpen : boolean =  false;
  isViewOpen : boolean = false;

  constructor(private artistService : ArtistService) { }

  updateArtist() {
    this.update.emit();
  }

  getSpecificArtist(id : string) {
    if (id == null) {
      return;
    }
    this.artistService.getSpecificArtist(id).subscribe((datas: any) => {
      this.artistSpecific = datas;
      this.isViewOpen = true;
    });
  }

  toggleArtistEditForm() {
    this.isEditOpen = !this.isEditOpen;
  }

  removeArtist(id : string) {
    if (id == null) {
      return;
    }
    this.artistService.removeArtist(id).subscribe(() => {
      this.update.emit();
    });
  }

  unViewArtist() {
    this.isViewOpen = false;
  }
}
