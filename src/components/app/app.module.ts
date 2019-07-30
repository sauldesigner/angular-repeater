import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from '../hello/hello.component';
import {RepeaterComponent } from '../repeater/repeater.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, RepeaterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
