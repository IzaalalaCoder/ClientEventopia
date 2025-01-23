import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditArtistComponent } from './form-edit-artist.component';

describe('FormEditArtistComponent', () => {
  let component: FormEditArtistComponent;
  let fixture: ComponentFixture<FormEditArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditArtistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
