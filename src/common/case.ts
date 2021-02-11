import { JobTitle } from "./jobTitle";
import { Location } from "./location";

export class Case {
  caseNumber: string;
  visaType: string;
  decisionDate: Date;
  location: Location;
  jobTitle: JobTitle;
  salary: number;
  admissionVisaType?: string;
  citizenshipCountry?: string;
  status: string;
}
