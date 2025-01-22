import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateArtistComponent } from './form-create-artist.component';

describe('FormCreateArtistComponent', () => {
  let component: FormCreateArtistComponent;
  let fixture: ComponentFixture<FormCreateArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreateArtistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
