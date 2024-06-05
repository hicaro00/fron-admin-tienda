import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuciosComponent } from './anucios.component';

describe('AnuciosComponent', () => {
  let component: AnuciosComponent;
  let fixture: ComponentFixture<AnuciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnuciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnuciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
