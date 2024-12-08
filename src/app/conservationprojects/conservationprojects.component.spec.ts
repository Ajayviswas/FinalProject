import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConservationprojectsComponent } from './conservationprojects.component';

describe('ConservationprojectsComponent', () => {
  let component: ConservationprojectsComponent;
  let fixture: ComponentFixture<ConservationprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConservationprojectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConservationprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
