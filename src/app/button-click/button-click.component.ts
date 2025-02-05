import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-click',
  standalone: false,
  
  templateUrl: './button-click.component.html',
  styleUrl: './button-click.component.css'
})
export class ButtonClickComponent {

  @Output() buttonClicked = new EventEmitter<string>();

  handleClick(){
    this.buttonClicked.emit('Clicked in child component')
  }
}
