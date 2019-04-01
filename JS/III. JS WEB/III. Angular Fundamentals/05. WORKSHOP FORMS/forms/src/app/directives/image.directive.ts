import { Directive, ElementRef } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from "@angular/forms";

@Directive({
  selector: '[appImage]',
  providers: [
  {
    provide: NG_VALIDATORS,
    useExisting: ImageDirective,
    multi: true
  }
]
})
export class ImageDirective implements Validator {
  validate(control: AbstractControl) {
    const inputValue = this.elementRef.nativeElement.value;

    return inputValue.startsWith("http") && (inputValue.endsWith("png") || inputValue.endsWith("jpg")) ? null : { invalidImageMatch: true };
  }

  constructor(public elementRef: ElementRef) { }
}
