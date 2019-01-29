import { Component, OnInit } from '@angular/core';
import { EmployeeService2 } from './employee.service'
import { IEmployee } from './employee'

@Component({
    selector: 'my-employeelistAsService2',
    templateUrl: 'app/servicesImplementation2/employeelist.component.html',
    styleUrls: ['app/servicesImplementation2/employeelist.component.css']
})
export class EmployeeListComponent2 implements OnInit {
    employees: IEmployee[];
    constructor(private _employeeService: EmployeeService2) {
    }

    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe(employeesData => this.employees = employeesData);
    }
}