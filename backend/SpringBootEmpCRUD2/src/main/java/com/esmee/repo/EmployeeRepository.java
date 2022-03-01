package com.esmee.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.esmee.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long>{

}
