export class Hall {
  type: string;
  name: string;
  icon: string;
  color: string;
  count?: number;
  things?: Array<any>;
  owner?: Array<string>;
  shared?: Array<string>;
  properties?: Property[];
  html?: string;
}
export class Thing {
  created: Date;
  by: string;
  values: any;
}
export class Property {
  label: string;
  name: string;
  type: 'TEXT' | 'NUMBER' | 'DATE' | 'DATETIME' | 'YEAR' | 'PICTURE' | 'TEXTAREA' | 'CHECKBOX' | 'RADIO' | 'SELECT' | 'BARCODE';
  displayInList: boolean;
  values?: any[];
}
export class Model {
  type: string;
  name: string;
  icon: string;
  color: string;
  html: string;
  properties?: Property[];
}
