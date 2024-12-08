import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactDetailsComponent } from './artifactdetails.component';

describe('ArtifactdetailsComponent', () => {
  let component: ArtifactDetailsComponent;
  let fixture: ComponentFixture<ArtifactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtifactDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtifactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
