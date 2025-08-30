import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenpromiseComponent } from './greenpromise.component';

describe('GreenpromiseComponent', () => {
  let component: GreenpromiseComponent;
  let fixture: ComponentFixture<GreenpromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenpromiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenpromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
