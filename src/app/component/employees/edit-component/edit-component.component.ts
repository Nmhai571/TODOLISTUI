import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit{

  employeeDetail: Employee = {
    id: '',
    name: '',
    email: '',
    phone: '',
    salary: 0,
    department: ''
  }

  constructor(private route: ActivatedRoute, private employeeService: EmployeeServiceService, private router: Router){

  }
  ngOnInit(): void { 
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id')
        if(id){
          this.employeeService.getEmployeeById(id).subscribe({
            next: (response) => {
              this.employeeDetail = response
            }
          })
        }
      }
    })
   }

   updateEmployee(){
      this.employeeService.updateEmployee(this.employeeDetail.id, this.employeeDetail).subscribe({
        next: (employee) => {
          this.router.navigate(["employees"])
        }
      })
   }

   deleteEmployee(id:string){
    this.employeeService.deleteEmployee(id, this.employeeDetail).subscribe({
      next: (response) => {
        console.log(response)
        this.router.navigate(['employees'])
      }
    })
   }

}
