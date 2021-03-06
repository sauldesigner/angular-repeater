import { Injectable } from '@angular/core';
import { Employee } from '../entities/Employee';
import * as employeesDataSource from '../data/employees.json';

@Injectable()
export class EmployeeService {

  private _employees: Employee[] = [];

  constructor() {
    this._employees = employeesDataSource.default;
  }

  public getEmployees(): Employee[] {
    return this._employees;
  }

  public getEmployeesOnRange(startIndex: number, count: number): Employee[] {
    let endIndex = startIndex + count;
    return this._employees.filter((element, index: number) => (index >= startIndex) && (index < endIndex));
  }


}