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

}