import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaunHeaderNotificationComponent } from './maun-header-notification.component';

describe('MaunHeaderNotificationComponent', () => {
  let component: MaunHeaderNotificationComponent;
  let fixture: ComponentFixture<MaunHeaderNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaunHeaderNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaunHeaderNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
