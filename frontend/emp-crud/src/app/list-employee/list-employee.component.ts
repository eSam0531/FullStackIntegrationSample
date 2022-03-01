import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees!: Observable<Employee[]>
  constructor(private empService: EmployeeService, private router: Router) { }

  reloadData() {
    this.employees = this.empService.getAllEmps();
  }

  ngOnInit(): void {
    this.reloadData();
  }

  employeeById(id: number) {
    this.router.navigate(['details', id]);
  }

  deleteEmpById(id: number) {
    this.empService.deleteEmpById(id).subscribe((data: any) => { 
      console.log(data); this.reloadData(); 
    }, error => console.log(error));
  }

  


}
