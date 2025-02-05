import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonClickComponent } from './button-click/button-click.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { NotificationSenderComponent } from './notification-sender/notification-sender.component';
import { NotificationReceiverComponent } from './notification-receiver/notification-receiver.component';
import { CounterComponent } from './counter/counter.component';
import { ItemOutputComponent } from './item-output/item-output.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonClickComponent,
    UserFormComponent,
    NotificationSenderComponent,
    NotificationReceiverComponent,
    CounterComponent,
    ItemOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
