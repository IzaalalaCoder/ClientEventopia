import { Component } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { Artist } from '../../models/artist.model';

@Component({
  selector: 'app-form-edit-artist',
  imports: [],
  templateUrl: './form-edit-artist.component.html',
  styleUrl: './form-edit-artist.component.css'
})
export class FormEditArtistComponent {
  @Input() artist: any = [];
  @Output() closeForm = new EventEmitter<void>();
  @Output() updateA = new EventEmitter<void>();

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
          this.updateA.emit();
          this.closeForm.emit();
        });
      }
    }
  }

  closeArtistForm() {
    this.closeForm.emit();
  }

}
