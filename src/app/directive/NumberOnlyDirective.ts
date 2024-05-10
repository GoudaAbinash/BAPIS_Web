import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[numbersOnly]'
})
export class OnlynumberDirective {

  // tslint:disable-next-line: variable-name
  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;

    this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if ( initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }
 }
// @Directive({
//   selector: '[appTwoDigitDecimaNumber]'
// })
// export class TwoDigitDecimaNumberDirective {
//   // Allow decimal numbers and negative values
//   private regex: RegExp = new RegExp(/^\d*\.?\d{0,2}$/g);
//   // Allow key codes for special events. Reflect :
//   // Backspace, tab, end, home
//   private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];

//   constructor(private el: ElementRef) {
//   }
//   @HostListener('keydown', ['$event'])
//   onKeyDown(event: KeyboardEvent) {
//     console.log(this.el.nativeElement.value);
//     // Allow Backspace, tab, end, and home keys
//     if (this.specialKeys.indexOf(event.key) !== -1) {
//       return;
//     }
//     let current: string = this.el.nativeElement.value;
//     const position = this.el.nativeElement.selectionStart;
//     const next: string = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
//     if (next && !String(next).match(this.regex)) {
//       event.preventDefault();
//     }
//   }
// }

// @Pipe({
//   name: 'removezero'
// })
// export class removezeroPipe implements PipeTransform {
//   transform(value: string): string {
//     return value.replace('.00', '').toString();
//   }
// }
