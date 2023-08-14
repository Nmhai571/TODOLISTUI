import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})

export class EmployeesListComponent implements OnInit{

  employees: Employee[] = []

  constructor(private employeeService: EmployeeServiceService){}

  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe({
      next: (employees) => {
        this.employees = employees
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

}
