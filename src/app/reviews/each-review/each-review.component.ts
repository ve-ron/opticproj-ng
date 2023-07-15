import { Component, OnInit, Input, HostBinding  } from '@angular/core';

@Component({
  selector: 'app-each-review',
  templateUrl: './each-review.component.html',
  styleUrls: ['./each-review.component.css']
})
export class EachReviewComponent implements OnInit {
  @HostBinding('className') componentClass: string = 'review-wrapper';

  @Input() image: string= '';
  @Input() heading: string= '';
  @Input() footer: string= '';

  constructor() { }

  ngOnInit(): void {
  }

}
