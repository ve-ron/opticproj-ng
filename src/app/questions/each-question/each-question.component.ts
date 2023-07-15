import { Component, OnInit, Input, HostBinding  } from '@angular/core';

@Component({
  selector: 'app-each-question',
  templateUrl: './each-question.component.html',
  styleUrls: ['./each-question.component.css']
})
export class EachQuestionComponent implements OnInit {
  @HostBinding('className') componentClass: string = 'question-wrapper';
  @Input() heading: string= '';
  @Input() content: string= '';

  constructor() { }

  ngOnInit(): void {
  }

}
