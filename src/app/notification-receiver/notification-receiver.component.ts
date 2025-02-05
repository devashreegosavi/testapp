import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification-receiver',
  standalone: false,
  
  templateUrl: './notification-receiver.component.html',
  styleUrl: './notification-receiver.component.css'
})
export class NotificationReceiverComponent implements OnInit{

  notification : string ='';

  constructor(private notify : NotificationService){

  }

  ngOnInit(){
    this.notify.notification.subscribe((message) => {
      this.notification = message
    })
  }
}
