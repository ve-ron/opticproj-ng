import { Component, OnInit } from '@angular/core';
import { texts } from '../constants';

@Component({
  selector: 'app-locate',
  templateUrl: './locate.component.html',
  styleUrls: ['./locate.component.css']
})
export class LocateComponent implements OnInit {
  textJson = texts;
  constructor() { }

  ngOnInit(): void {
  }

}
