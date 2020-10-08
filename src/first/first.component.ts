import { Component, OnInit } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  constructor(private eventBus: NgEventBus) { }

  ngOnInit() {
    this.eventBus.on('message:greet').subscribe((message)=>{
    console.log(message); //will receive 'Hi!'
});
  }

}