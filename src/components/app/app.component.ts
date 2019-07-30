import { Component, OnInit } from '@angular/core';
import { Employee } from '../../entities/Employee';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  private _employees: Employee[] = [];


  public ngOnInit(): void {
    this.getData();
  }


  private getData(): void {
    this._employees = [
      { employeeId: 'AAA', name: 'employee a', attribute: 1 },
      { employeeId: 'BBB', name: 'employee b', attribute: 0 },
      { employeeId: 'CCC', name: 'employee c', attribute: 3 }
    ];

  }





  public get employees(): Employee[] {
    return this._employees;
  }

}
