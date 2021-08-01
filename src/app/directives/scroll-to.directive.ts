import { Directive, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[scrollTo]'
})
export class ScrollToDirective {
  @Input() scrollTo: string;

  constructor() { }

  @HostListener('click') onClick() {
    document.querySelector(`#${this.scrollTo}`)?.scrollIntoView({behavior: 'smooth'});
  }
}
