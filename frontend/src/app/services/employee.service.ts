import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Employee {
  id: string;
  name: string;
  email: string;
  position: string;
  salary: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly baseUrl = 'http://localhost:8081/employees';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
