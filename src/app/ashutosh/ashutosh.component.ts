import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ashutosh',
  templateUrl: './ashutosh.component.html',
  styleUrls: ['./ashutosh.component.scss']
})
export class AshutoshComponent implements OnInit {

  constructor() { }
  parentMessage = "Hello I am your Daddy!";
  childMesage = "";
  ngOnInit(): void {
  }
  chileMessage(event: any) {
    debugger;
    this.childMesage = event;
  }
}
