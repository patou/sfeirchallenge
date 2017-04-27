export class Hall {
  type: string;
  name: string;
  icon: string;
  color: string;
  count?: number;
  things?: Array<any>;
  owner?: Array<string>;
  shared?: Array<string>;
}
export class Thing {
  created: Date;
  by: string;
  values: any;
}
//Attnetion : Quand on print un enum en angular avec {{}} ça produit l'index de l'enum TEXT : 0 NUMBER : 1 etc ...
export enum PropertyType {
  TEXT,
  NUMBER,
  DATE,
  DATETIME,
  PICTURE,
  TEXAREA,
  CHECKBOX,
  RADIO,
  SELECT,
  BARCODE
}
export class Property {
  label: string;
  name: string;
  type: PropertyType;
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
