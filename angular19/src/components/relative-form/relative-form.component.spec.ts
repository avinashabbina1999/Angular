import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeFormComponent } from './relative-form.component';

describe('RelativeFormComponent', () => {
  let component: RelativeFormComponent;
  let fixture: ComponentFixture<RelativeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelativeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelativeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
