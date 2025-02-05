import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: false,
  
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  @Output() formSubmitted = new EventEmitter<{name : string; age : number}>();

  userData = {name : '', age : 0};

  submitForm(){
    //console.log(this.userData);
    this.formSubmitted.emit(this.userData);
  }
}
