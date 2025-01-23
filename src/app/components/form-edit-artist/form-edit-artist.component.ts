import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { Artist } from '../../models/artist.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-edit-artist',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-edit-artist.component.html',
  styleUrl: './form-edit-artist.component.css'
})
export class FormEditArtistComponent {
  @Input() artist: any = [];
  @Output() closeForm = new EventEmitter<void>();
  @Output() update = new EventEmitter<void>();

  artistForm: FormGroup = new FormGroup({
    label: new FormControl("")
  });

  constructor(private artistService: ArtistService) { }

  submit() {
    if (this.artistForm.valid) {

      const newArtist: Artist = new Artist();
      newArtist.label = this.artistForm.value.label;

      if (this.artist) {
        this.artistService.updateArtist(this.artist.id, newArtist).subscribe(() => {
          this.update.emit();
          this.closeForm.emit();
        });
      }
    }
  }

  closeArtistForm() {
    this.closeForm.emit();
  }

}
