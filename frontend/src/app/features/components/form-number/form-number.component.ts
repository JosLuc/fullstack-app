import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

interface CalculationResult {
  id?: number;
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

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.form = this.fb.group({
      number1: ['', Validators.required],
      number2: ['', Validators.required],
      number3: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const { number1, number2, number3 } = this.form.value;

      this.apiService
        .createProcessing({ num1: number1, num2: number2, num3: number3 })
        .subscribe(
          (response) => {
            const newCalculation: CalculationResult = {
              id: response.id,
              number1,
              number2,
              number3,
              status: response.status,
            };
            this.calculations.push(newCalculation);
            this.dataSource.data = this.calculations;

            this.checkStatus(response.id, newCalculation);
          },
          (error) => {
            console.error(error);
            alert('Error creating processing.');
          }
        );
    }
  }

  private checkStatus(id: number, calculation: CalculationResult) {
    const interval = setInterval(() => {
      this.apiService.getStatus(id).subscribe(
        (response) => {
          calculation.status = response.status;
          if (response.status === 'Successfully') {
            calculation.average = response.average;
            calculation.median = response.median;
            this.dataSource.data = [...this.calculations];
            clearInterval(interval);
          }
        },
        (error) => {
          console.error(error);
          alert('Error fetching status.');
        }
      );
    }, 2000);
  }

  removeCalculation(index: number) {
    const calculation = this.calculations[index];
    if (calculation.id) {
      this.apiService.deleteProcessing(calculation.id).subscribe(
        () => {
          this.calculations.splice(index, 1);
          this.dataSource.data = [...this.calculations];
          alert('Processing deleted successfully!');
        },
        (error) => {
          console.error(error);
          alert('Error deleting processing.');
        }
      );
    }
  }
}
