import { Directive, ElementRef, Renderer2, HostListener, Input, ViewChild } from '@angular/core';

@Directive({
  selector: '[appGoto]'
})
export class GotoDirective {
  targetElement!: HTMLElement;
  @Input('appGoto') targetId!: string;
  constructor() { }

  ngOnInit() {
    this.targetElement = document.getElementById(this.targetId) as HTMLElement; // this.renderer.selectRootElement('#' + this.targetId); 
  }

  @HostListener('click') onClick() {
    if (this.targetElement) {
      this.targetElement.scrollIntoView({behavior: "smooth"})
    }
  }

}
