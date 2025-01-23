import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Event } from '../../models/event.model';
import { Artist } from '../../models/artist.model';
import { EventService } from '../../services/event.service';
import { ArtistService } from '../../services/artist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-linked',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-linked.component.html',
  styleUrl: './form-linked.component.css'
})
export class FormLinkedComponent implements OnInit {
  @Input() event : Event = new Event();
  @Input() artist : Artist = new Artist();
  @Input() onEvent : boolean = true;
  @Output() closeForm = new EventEmitter<void>();
  @Output() update = new EventEmitter<void>();  

  artistsList: Artist[] = [];
  eventsList: Event[] = [];

  linkedFormForEvent : FormGroup = new FormGroup({
    artists: new FormControl(""),
  });

  linkedFormForArtist : FormGroup = new FormGroup({
    events: new FormControl(""),
  });

  constructor(private eventService : EventService, private artistService : ArtistService) {}

  ngOnInit(): void {
    if (this.onEvent) {
      this.artistService.getAllArtists().subscribe((a : any) => {
        this.artistsList = a;
      });
    } else {
      this.eventService.getAllEvents().subscribe((e : any) => {
        this.eventsList = e;
      });
    }
  }

  submit() {
    const other = this.onEvent ? this.linkedFormForEvent.artists.value : this.linkedFormForArtist.events.value;
    this.eventService.linkArtist(this.onEvent ? this.event.id : other, 
      this.onEvent ? other : this.artist.id).subscribe(() => {
        this.update.emit();
      })
  }

  close() {
    this.closeForm.emit();
  }
}
