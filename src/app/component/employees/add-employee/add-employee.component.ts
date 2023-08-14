import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: '',
    salary: 0,
    department: ''

  } 

  constructor(private employeeService: EmployeeServiceService, private router: Router){}
  ngOnInit(): void {}

  addEmployee(){
    this.employeeService.addEmplement(this.addEmployeeRequest).subscribe({
      next: (employee)  => {
        this.router.navigate(["employees"])
      }
    })
  }

}
