
import { NgModule } from '@angular/core';

import { OptionIcon } from './ion-option-icon';
import { HtmlOutlet } from './html-outlet';
import { TextType } from './type/text';
import { IconType } from './type/icon';
import { NumberType } from './type/number';
import { DateTimeType } from './type/date-time';
import { TextAreaType } from './type/textarea-type';


@NgModule({
  declarations: [
    OptionIcon,
    HtmlOutlet,
    TextType,
    NumberType,
    DateTimeType,
    TextAreaType
  ],
  imports: [
  ],
  entryComponents: [
  ],
})
export class ComponentModule {}
