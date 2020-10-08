import { Component, OnInit } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  constructor(private eventBus: NgEventBus) { }

  ngOnInit() {
  }

  fireEvent() {
this.eventBus.cast('message:greet', 'Hi from second!');
  }

}