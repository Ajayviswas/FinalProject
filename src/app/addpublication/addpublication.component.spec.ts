import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPublicationComponent } from './addpublication.component';

describe('AddpublicationComponent', () => {
  let component: AddPublicationComponent;
  let fixture: ComponentFixture<AddPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPublicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
