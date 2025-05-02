import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArithmeticServiceService } from '../../services/arithmetic-service.service';
import { DataServiceService, MarksDetails } from '../../services/data-service.service';

@Component({
  selector: 'app-component-one',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {

  public marksDetails: MarksDetails[] = [];

  public subject: string = '';
  public marks: string = '';

  public valueOne: string = '';
  public valueTwo: string = '';
  public result!: number;

  constructor(
    public marksService: DataServiceService,
    private arithmeticService: ArithmeticServiceService
  ) { }

  ngOnInit(): void {
    // Use of Service Marks Array
    this.marksDetails = this.marksService.getMarksDetails();
  }

  public pushIntoArray(): void {
    if (this.subject && this.marks) {
      this.marksService.pushMarksDetails({
        subject: this.subject,
        marks: +this.marks
      });
      this.subject = '';
      this.marks = '';
    }
  }

  public getSum(): void {
    // using service function
    this.result = this.arithmeticService.getSum(+this.valueOne, +this.valueTwo);
  }

}
