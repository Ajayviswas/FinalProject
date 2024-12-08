import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDetailsComponent } from './sitedetails.component';

describe('SitedetailsComponent', () => {
  let component: SiteDetailsComponent;
  let fixture: ComponentFixture<SiteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
