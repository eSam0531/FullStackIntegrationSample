package com.esmee.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esmee.model.Employee;
import com.esmee.repo.EmployeeRepository;

@Service
public class EmpService {
	
	@Autowired
	EmployeeRepository repo;
	
	public List<Employee> getAllEmps(){
		return repo.findAll();
	}
	
	public Optional<Employee> getEmpById(Long id){
		return repo.findById(id);
	}
	
	public Employee createEmp(Employee emp) {
		return repo.save(emp);
	}
	
	public void deleteEmp(Long id) {
		repo.deleteById(id);
	}
	
	public void update(Employee emp) {
		repo.save(emp);
	}

}
