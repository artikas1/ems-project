package com.artiom.ems_backend.domain.employee.service;

import com.artiom.ems_backend.domain.employee.entity.Employee;
import com.artiom.ems_backend.domain.employee.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
@Transactional
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    public void deleteEmployee(UUID id) {
        if (employeeRepository.existsById(id)) {
            employeeRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Employee with ID " + id + " does not exist.");
        }
    }
}
