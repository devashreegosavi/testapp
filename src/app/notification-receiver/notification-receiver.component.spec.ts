import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationReceiverComponent } from './notification-receiver.component';

describe('NotificationReceiverComponent', () => {
  let component: NotificationReceiverComponent;
  let fixture: ComponentFixture<NotificationReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationReceiverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
