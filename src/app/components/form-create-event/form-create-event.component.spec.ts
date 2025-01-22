import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateEventComponent } from './form-create-event.component';

describe('FormCreateEventComponent', () => {
  let component: FormCreateEventComponent;
  let fixture: ComponentFixture<FormCreateEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreateEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
