import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtifactComponent } from './addartifact.component';

describe('AddartifactComponent', () => {
  let component: AddArtifactComponent;
  let fixture: ComponentFixture<AddArtifactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddArtifactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddArtifactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
