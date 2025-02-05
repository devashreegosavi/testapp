import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
    @Input() count : number = 0;
    @Output() countChange =  new EventEmitter<number>();

    Increament(){
      this.count++;
      this.countChange.emit(this.count);
    }
}
