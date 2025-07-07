import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../../services/keycloack.service';
import { Employee, EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  isAdmin = false;

  constructor(
    private employeeService: EmployeeService,
    private keycloakService: KeycloakService
  ) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
    this.isAdmin = this.keycloakService.isAdmin();
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter(e => e.id !== id);
    });
  }

  logout(): void {
    this.keycloakService.logout();
  }
}
