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
enum PropertyType {
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
  values: any[];
}
export class Model {
  type: string;
  name: string;
  icon: string;
  color: string;
  html: string;
  properties?: Property[];
}
