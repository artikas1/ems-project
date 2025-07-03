import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService, Employee } from '../../services/employee.service';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  private readonly employeeService = inject(EmployeeService);
  private readonly keycloakService = inject(KeycloakService);

  employees: Employee[] = [];
  isAdmin = false;
  errorMessage = '';

  ngOnInit(): void {
    this.checkRoles();
    this.loadEmployees();
  }

  private checkRoles(): void {
    const roles = this.keycloakService.getUserRoles();
    this.isAdmin = roles.includes('admin');
  }

  loadEmployees(): void {
    this.employeeService.getAll().subscribe({
      next: (data: Employee[]) => {
        this.employees = data;
      },
      error: (err: unknown) => {
        console.error(err);
        this.errorMessage = 'Failed to load employees';
      }
    });
  }

  deleteEmployee(id: string): void {
    if (!confirm('Are you sure you want to delete this employee?')) return;

    this.employeeService.delete(id).subscribe({
      next: () => {
        this.employees = this.employees.filter(emp => emp.id !== id);
      },
      error: (err: unknown) => {
        console.error(err);
        this.errorMessage = 'Failed to delete employee';
      }
    });
  }
}
