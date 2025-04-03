import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'http://127.0.0.1:8000/core';

  constructor(private http: HttpClient) {}

  createProcessing(data: {
    num1: number;
    num2: number;
    num3: number;
  }): Observable<any> {
    return this.http.post(`${this.API_URL}/processing/`, data);
  }

  getStatus(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/status/${id}/`);
  }

  deleteProcessing(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/processing_delete/${id}/`);
  }
}
