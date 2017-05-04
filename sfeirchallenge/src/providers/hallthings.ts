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
//TODO : 'CHECKBOX' , 'SELECT' , 'BARCODE', 
export const propertyTypes : string[] = ['TEXT' , 'NUMBER' , 'DATE' , 'DATETIME' , 'YEAR' , 'PICTURE' , 'TEXTAREA' , 'ICON' , 'COLOR', 'STAR'];
export class Property {
  label: string;
  name: string;
  type: string;
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
