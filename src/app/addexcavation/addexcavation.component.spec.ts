import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExcavationComponent } from './addexcavation.component';

describe('AddexcavationComponent', () => {
  let component: AddExcavationComponent;
  let fixture: ComponentFixture<AddExcavationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddExcavationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddExcavationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
