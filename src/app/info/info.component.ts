import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { texts } from '../constants';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit, OnDestroy {
  destroyed = new Subject<void>();
  currentScreenSize!: string;

  textJson = texts;

  constructor(breakpointObserver: BreakpointObserver) {

    breakpointObserver
      .observe([
        Breakpoints.Handset,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        if (result.matches) {
          this.currentScreenSize = 'mobile';
        }
      });

    breakpointObserver
      .observe([
        Breakpoints.Tablet,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        if (result.matches) {
          this.currentScreenSize = 'tablet';
        }
      });

    breakpointObserver
      .observe([
        Breakpoints.Web,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        if (result.matches) {
          this.currentScreenSize = 'web';
        }
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
