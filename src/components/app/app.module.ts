import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {RepeaterComponent } from '../repeater/repeater.component';
import { ServicesModule } from '../../services/services.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ServicesModule ],
  declarations: [ AppComponent, RepeaterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
