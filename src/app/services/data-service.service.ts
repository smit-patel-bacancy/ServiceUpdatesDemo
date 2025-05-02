import { Injectable } from '@angular/core';
import { ArithmeticServiceService } from './arithmetic-service.service';

export interface MarksDetails {
  subject: string;
  marks: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private centralMarksDetails: MarksDetails[] = [
    { subject: 'Data Structure', marks: 89 },
    { subject: 'DBMS', marks: 82 },
    { subject: 'C++', marks: 85 }
  ];

  constructor(private arithmeticService: ArithmeticServiceService) { }

  public pushMarksDetails(details: MarksDetails): void {
    this.centralMarksDetails.push(details);
  }

  public getMarksDetails(): MarksDetails[] {
    return this.centralMarksDetails;
  }

  public getSum(value1: number, value2: number): number {
    return this.arithmeticService.getSum(value1, value2);
  }
}
