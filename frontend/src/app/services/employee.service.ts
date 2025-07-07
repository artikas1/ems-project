import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
  salary: number;
}

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private baseUrl = 'http://localhost:8081/employees';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
