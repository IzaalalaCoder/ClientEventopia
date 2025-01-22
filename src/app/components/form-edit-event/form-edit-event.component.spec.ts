import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditEventComponent } from './form-edit-event.component';

describe('FormEditEventComponent', () => {
  let component: FormEditEventComponent;
  let fixture: ComponentFixture<FormEditEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
