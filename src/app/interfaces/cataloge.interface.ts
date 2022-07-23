export interface Datum {
  id: number;
  name: string;
  icon: string;
}

export interface ICataloge {
  message: string;
  data: Datum[];
}
