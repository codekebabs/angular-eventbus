import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgEventBus } from 'ng-event-bus';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FirstComponent, SecondComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NgEventBus]
})
export class AppModule { }
