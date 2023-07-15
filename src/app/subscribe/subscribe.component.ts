import { Component, OnInit } from '@angular/core';
import { texts } from '../constants';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  textJson = texts;

  constructor() { }

  ngOnInit(): void {
  }

}
