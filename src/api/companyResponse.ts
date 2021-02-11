import { Case } from '../common/case';
import { Company } from '../common/company';

export class CompanyResponse {
  /**
   * Company related information
   */
  company: Company;

  /**
   * List of cases for the given company
   */
  caseList: Case[];

  /**
   * Currently not used yet. Will contain related companies to display.
   */
  relatedCompanyList: Company[];
}
