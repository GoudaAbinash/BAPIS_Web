import { Directive,HostListener } from '@angular/core';

@Directive({
  selector: '[appDisablecopyPaste]'
})
export class DisablecopyPasteDirective {

  constructor() { }
  
  @HostListener('paste', ['$event']) disablePaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('copy', ['$event']) Disablecopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }


}
