export class Hall {
  type: string;
  name: string;
  icon: string;
  color: string;
  count?: number;
  things?: Array<any>;
  owner?: string;
  properties?: Property[];
  html?: string;
}
export class Thing {
  created: Date;
  by: string;
  values: any;
}
//TODO : 'CHECKBOX' , 'BARCODE',
export const propertyTypes : string[] = ['TEXT' , 'NUMBER' , 'DATE' , 'DATETIME' , 'PICTURE' , 'SELECT', 'TEXTAREA' , 'ICON' , 'YEAR' , 'COLOR', 'STAR'];
export class Property {
  label: string;
  name: string;
  type: string;
  displayInList: boolean;
  values?: string;
}
export class Model {
  type: string;
  name: string;
  icon: string;
  color: string;
  html: string;
  properties?: Property[];
}
