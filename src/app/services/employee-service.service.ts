import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  baseUrl = "https://localhost:7000";
  constructor(private http: HttpClient) { }
  
  getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl + "/api/Employee/get-employee");
  }

  addEmplement(addEmployeeRequest: Employee) : Observable<Employee> {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000'
    return this.http.post<Employee>(this.baseUrl + "/api/Employee/add-employee", addEmployeeRequest);
  }

  getEmployeeById(id: string): Observable<Employee>{
    return this.http.get<Employee>(this.baseUrl + "/api/Employee/" + id);
  }

  updateEmployee(id:string, updateEmployee: Employee) : Observable<Employee>{
    return this.http.post<Employee>(this.baseUrl + "/api/Employee/edit-employee/" + id, updateEmployee)
  }

  deleteEmployee(id:string, deleteEmployee: Employee) : Observable<Employee>{
    return this.http.post<Employee>(this.baseUrl + "/api/Employee/delete/" + id, deleteEmployee)
  }
}
