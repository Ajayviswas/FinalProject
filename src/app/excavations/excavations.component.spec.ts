import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcavationsComponent } from './excavations.component';

describe('ExcavationsComponent', () => {
  let component: ExcavationsComponent;
  let fixture: ComponentFixture<ExcavationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcavationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcavationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
