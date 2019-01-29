import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService2 } from './employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'my-employee2',
    templateUrl: 'app/servicesImplementation2/employee.component.html'
})
export class EmployeeComponent2 implements OnInit {
    employee: IEmployee;
    statusMessage: string = 'Loading data. Please wait...';

    constructor(private _employeeService: EmployeeService2,
        private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode)
            .subscribe((employeeData) => {
                if (employeeData == null) {
                    this.statusMessage =
                        'Employee with the specified Employee Code does not exist';
                }
                else {
                    this.employee = employeeData;
                }
            },
                (error) => {
                    this.statusMessage =
                        'Problem with the service. Please try again after sometime';
                    console.error(error);
                });
    }
}