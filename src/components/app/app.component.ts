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
      { employeeId: 'AAA', name: 'Filomena Moya Campos', attribute: 1 },
      { employeeId: 'BBB', name: 'Lucia Pastor Rojas', attribute: 0 },
      { employeeId: 'CCC', name: 'Jose Manuel Losada Benitez', attribute: 3 },
      { employeeId: 'DDD', name: 'Francisco Galindo Juarez', attribute: 2 }
    ];
  }


public employeeSelectedChanged(employee: Employee):void{
  console.log('employeeSelectedChanged', employee );
}





  public get employees(): Employee[] {
    return this._employees;
  }

}
