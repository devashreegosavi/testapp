import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification-sender',
  standalone: false,
  
  templateUrl: './notification-sender.component.html',
  styleUrl: './notification-sender.component.css'
})
export class NotificationSenderComponent {

  constructor(private sndnotify : NotificationService){

  }
  sendNotification(){
    this.sndnotify.sendNotification('Hello from notification sender')
  }
}
