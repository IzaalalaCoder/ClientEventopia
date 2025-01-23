import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLinkedComponent } from './form-linked.component';

describe('FormLinkedComponent', () => {
  let component: FormLinkedComponent;
  let fixture: ComponentFixture<FormLinkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLinkedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLinkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
