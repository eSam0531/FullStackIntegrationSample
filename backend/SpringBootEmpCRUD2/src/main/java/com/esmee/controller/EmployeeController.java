package com.esmee.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.esmee.model.Employee;
import com.esmee.service.EmpService;

@RestController
@RequestMapping("/api")
public class EmployeeController {
	
	@Autowired
	private EmpService service;
	
	@GetMapping("/emps")
	public List<Employee> getAllEmployees(){
		return service.getAllEmps();
	}
	
	@GetMapping("/emps/{id}")
	public ResponseEntity<Optional<Employee>> getEmpById(@PathVariable Long id){
		Optional<Employee> emp = service.getEmpById(id);
		return ResponseEntity.ok().body(emp);
	}
	
	@PostMapping("/emps")
	public Employee createEmployee(@RequestBody Employee emp) {
		return service.createEmp(emp);
	}
	
	@DeleteMapping("/emps/{id}")
	public void deleteEmployee(@PathVariable Long id) {
		service.deleteEmp(id);
	}
	
	@PutMapping("/emps/{id}")
	public void update(@RequestBody Employee emp){
		service.update(emp); 
	}

}
