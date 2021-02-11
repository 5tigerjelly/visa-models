import { Location } from "../common/location";

export class CompanyRequest {
  /**
   * Name of the company to query from. Casing doesn't matter
   * ex) Amazon
   */
  companyNameClean: string;

  location?: Location;

  jobTitleNameClean?: string;
}
