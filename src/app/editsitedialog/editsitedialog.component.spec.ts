import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSiteDialogComponent } from './editsitedialog.component';

describe('EditsitedialogComponent', () => {
  let component: EditSiteDialogComponent;
  let fixture: ComponentFixture<EditSiteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSiteDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSiteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
