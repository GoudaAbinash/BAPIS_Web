import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[alphabetsOnly]'
})
export class OnlyAlphabetDirective {

  // tslint:disable-next-line: variable-name
  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;

    // this._el.nativeElement.value = initalValue.replace(/[^a-zA-Z]*/g, '');
    
    this._el.nativeElement.value = initalValue.replace(/[^a-zA-Z ]*/g, '');
    if ( initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}