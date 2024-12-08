import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArtifactDialogComponent } from './editartifactdialog.component';

describe('EditartifactdialogComponent', () => {
  let component: EditArtifactDialogComponent;
  let fixture: ComponentFixture<EditArtifactDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditArtifactDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditArtifactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
