import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharkDirective } from './shark.directive';
import { PupComponent } from './pup.component';
import { AshutoshComponent } from './ashutosh/ashutosh.component';
import { ArnavComponent } from './arnav/arnav.component';
import { RainbowDirective } from './rainbow.directive';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    SharkDirective,
    PupComponent,
    AshutoshComponent,
    ArnavComponent,
    RainbowDirective,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
