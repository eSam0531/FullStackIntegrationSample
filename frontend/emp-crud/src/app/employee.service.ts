import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/emps';
  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAllEmps():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  deleteEmpById(id:number):Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id},{responseType}:'text'`);
  }

  createEmp(employee:object):Observable<Object> {
    return this.http.post(`${this.baseUrl}`,employee);
  }

  updateEmp(id:number, employee:object):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, employee);
  }

}
