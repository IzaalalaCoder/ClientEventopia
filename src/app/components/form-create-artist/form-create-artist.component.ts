import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtistService } from '../../services/artist.service';
import { Artist } from '../../models/artist.model';

@Component({
  selector: 'app-form-create-artist',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-create-artist.component.html',
  styleUrl: './form-create-artist.component.css'
})
export class FormCreateArtistComponent {
  @Output() closeForm = new EventEmitter<void>();
  @Output() addedA = new EventEmitter<void>();

  artistForm: FormGroup;

  constructor(private artistService: ArtistService) {
    this.artistForm = new FormGroup({
      label: new FormControl(''),
    });
  }

  submit() {
    if (this.artistForm.invalid) {
      return;
    }

    const artist: Artist = new Artist();
    artist.label = this.artistForm.value.label;

    this.artistService.createArtist(artist).subscribe(() => {
      this.addedA.emit();
    });
  }

  closeEventForm() {
    this.closeForm.emit();
  }
}
