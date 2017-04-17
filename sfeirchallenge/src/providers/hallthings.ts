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
