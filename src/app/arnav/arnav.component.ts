import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-arnav',
  templateUrl: './arnav.component.html',
  styleUrls: ['./arnav.component.scss']
})
export class ArnavComponent implements OnInit {
  @Input() message = "hi i am arnav!";
  @Output() outputmessage = new EventEmitter<any>();
  test = "";
  constructor() { }
  ngOnInit(): void {

  }
  outputTest() {
    debugger;
    this.test = "hello i am your son";
    this.outputmessage.emit(this.test);
  }
}
