import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service'
import { IEmployee } from './employee'

@Component({
    selector: 'my-employeelistAsService',
    templateUrl: 'app/servicesImplementation/employeelist.component.html',
    styleUrls: ['app/servicesImplementation/employeelist.component.css']
})
export class EmployeeList implements OnInit {
    employees: IEmployee[];
    constructor(private _employeeService: EmployeeService) {
    }

    ngOnInit() {
        this.employees = this._employeeService.getEmployee();
    }
}