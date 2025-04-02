import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ScrollingModule } from '@angular/cdk/scrolling';

interface CalculationResult {
  number1: number;
  number2: number;
  number3: number;
  status: string;
  average?: number;
  median?: number;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CdkVirtualScrollViewport,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    ScrollingModule,
  ],
  templateUrl: './form-number.component.html',
  styleUrls: ['./form-number.component.scss'],
})
export class FormComponent {
  form: FormGroup;
  displayedColumns: string[] = [
    'number1',
    'number2',
    'number3',
    'status',
    'average',
    'median',
    'actions',
  ];
  dataSource = new MatTableDataSource<CalculationResult>();

  calculations: CalculationResult[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      number1: ['', Validators.required],
      number2: ['', Validators.required],
      number3: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const { number1, number2, number3 } = this.form.value;
      const newCalculation: CalculationResult = {
        number1,
        number2,
        number3,
        status: 'Processing...',
      };
      this.calculations.push(newCalculation);
      this.dataSource.data = this.calculations;

      // Simulate a delay for processing
      setTimeout(() => {
        newCalculation.status = 'Successfully';
        newCalculation.average = this.calculateAverage(
          number1,
          number2,
          number3
        );
        newCalculation.median = this.calculateMedian([
          number1,
          number2,
          number3,
        ]);
        this.dataSource.data = [...this.calculations];
      }, 2000);
    }
  }

  private calculateAverage(
    number1: number,
    number2: number,
    number3: number
  ): number {
    const average = (number1 + number2 + number3) / 3;
    return parseFloat(average.toFixed(2));
  }

  private calculateMedian(numbers: number[]): number {
    numbers.sort((a, b) => a - b);
    const mid = Math.floor(numbers.length / 2);
    const median =
      numbers.length % 2 !== 0
        ? numbers[mid]
        : (numbers[mid - 1] + numbers[mid]) / 2;
    return parseFloat(median.toFixed(2));
  }

  removeCalculation(index: number) {
    this.calculations.splice(index, 1);
    this.dataSource.data = [...this.calculations];
  }
}
