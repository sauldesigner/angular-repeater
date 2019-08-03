import { Component, OnInit } from '@angular/core';
import { Employee } from '../../entities/Employee';
import * as employees from '../../data/employees.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  private _employees: Employee[] = [];


  public ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(): void {
    this._employees = employees.default;
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
