import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNumberComponent } from './form-number.component';

describe('FormNumberComponent', () => {
  let component: FormNumberComponent;
  let fixture: ComponentFixture<FormNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
