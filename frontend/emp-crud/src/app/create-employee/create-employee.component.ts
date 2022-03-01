import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  emp:Employee = new Employee();
  submitted!:false;
  constructor(private empService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  newEmp():void{
    this.submitted=false;
    this.emp=new Employee();
  }

  saveEmp(){
    this.empService.createEmp(this.emp).subscribe(data=>{
      console.log(data);
      this.emp = new Employee();
      this.gotoList();
    },error => console.log(error))
  }

  gotoList(){
    this.router.navigate(['/emps']);
  }

}
