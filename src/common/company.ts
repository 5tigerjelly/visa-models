import { Location } from "./location";

export class Company {
  companyName: string;
  companyNameClean: string;
  companyDbaName?: string;
  companyAddress: string;
  companyLocation: Location;
  companyZip: string;
}
