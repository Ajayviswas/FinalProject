import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySiteComponent } from './mysite.component';

describe('MysiteComponent', () => {
  let component: MySiteComponent;
  let fixture: ComponentFixture<MySiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
