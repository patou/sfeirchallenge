import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Option } from 'ionic-angular'
/**
 * @name Option
 * @description
 * `ion-option` is a child component of `ion-select`. Similar to the native option element, `ion-option` can take a value and a selected property.
 *
 * @demo /docs/demos/src/select/
 */
@Directive({
  selector: 'ion-option-icon'
})
export class OptionIcon extends Option {

  _icon: string;
  __elementRef: ElementRef;

  constructor(_elementRef: ElementRef) {
    super(_elementRef);
    this.__elementRef = _elementRef;
  }

  /**
   * @input {any} The value of the option.
   */
  @Input()
  get icon() {
    return this._icon;
  }
  set icon(val: any) {
    this._icon = val;
  }

  get content() {
    return this.__elementRef.nativeElement.textContent;
  }

  /**
   * @hidden
   */
  get text() {
    return "toto"+ this.content;
    /*if (this._icon !== undefined && this._icon !== null) {
        return this._icon + this.content;
    }
    else {
        return this.content;
    }*/
  }
}
