import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PupComponent } from './pup.component';
import { SharkDirective } from './shark.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angularTest';
  extraCreature!: string;
  @ViewChild(SharkDirective) set appShark(directive: SharkDirective) {
    this.extraCreature = directive.creature;
  }
  @ViewChild('someInput') someInput!: ElementRef;
  @ViewChild(PupComponent) pup!: PupComponent;
  ngAfterViewInit() {
    console.log(this.extraCreature); // Dolphin
    this.someInput.nativeElement.value = "ashutosh";
    this.someInput.nativeElement.value = this.pup.whoAmI();
    this.pup.title = "hello ashutosh you learnt how to use viewChild!";
  }
}
