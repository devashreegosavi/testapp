import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testapp';

  items = ['item1','item2','item3','item4'];
  counter = 0;
  onButtonClick(message : string){
    console.log(message);
  }

  onFormSubmit(userData : {name : string; age : number}){
    console.log('Form Submitted',userData );
  }

  addItem(value: string){
    this.items.push(value);
  }

  updateCounter(newval : number){
    this.counter = newval;
  }
}
