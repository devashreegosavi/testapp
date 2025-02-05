import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notification = new EventEmitter<string>()
  constructor() { }

  sendNotification(message:string){
    this.notification.emit(message); 
  }

}
