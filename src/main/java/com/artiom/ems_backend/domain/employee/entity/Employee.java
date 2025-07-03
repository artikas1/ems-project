package com.artiom.ems_backend.domain.employee.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.util.UUID;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "employees")
public class Employee {

    @Id
    private UUID id;
    private String name;
    private String email;
    private String position;
    private double salary;

}
