import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pup',
  templateUrl: './pup.component.html',
  styleUrls: ['./pup.component.scss']
})
export class PupComponent implements OnInit {

  constructor() { }
  title = "test";
  whoAmI() {
    return 'I am a pup component!';
  }
  ngOnInit(): void {
  }

}
