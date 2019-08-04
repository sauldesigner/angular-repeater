import { Component, OnInit } from '@angular/core';
import { Employee } from '../../entities/Employee';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _employees: Employee[] = [];

constructor(private _employeeService: EmployeeService){

}

  public ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(): void {
    this._employees = this._employeeService.getEmployeesOnRange(0, 4);
  }


public employeeSelectedChanged(employee: Employee):void{
  console.log(employee.name + ' --->>> is selected');
}

public sendEmployeeHandler(event: any, employee: Employee):void{
    console.log(employee.name + ' --->>> is sended');
    event.stopPropagation();
}



  public get employees(): Employee[] {
    return this._employees;
  }

}
