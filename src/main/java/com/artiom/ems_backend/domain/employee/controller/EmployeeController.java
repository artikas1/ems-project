package com.artiom.ems_backend.domain.employee.controller;

import com.artiom.ems_backend.domain.employee.entity.Employee;
import com.artiom.ems_backend.domain.employee.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/employees")
@AllArgsConstructor
@EnableMethodSecurity
public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping()
    @PreAuthorize("hasAnyRole('admin', 'user')")
    public List<Employee> getAllEmployees() {
        return employeeService.getEmployees();
    }

    @PreAuthorize("hasRole('admin')")
    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable UUID id) {
        employeeService.deleteEmployee(id);
    }
}
