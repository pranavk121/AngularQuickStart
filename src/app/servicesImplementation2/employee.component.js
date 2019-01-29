"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var router_1 = require("@angular/router");
var EmployeeComponent2 = (function () {
    function EmployeeComponent2(_employeeService, _activatedRoute) {
        this._employeeService = _employeeService;
        this._activatedRoute = _activatedRoute;
        this.statusMessage = 'Loading data. Please wait...';
    }
    EmployeeComponent2.prototype.ngOnInit = function () {
        var _this = this;
        var empCode = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode)
            .subscribe(function (employeeData) {
            if (employeeData == null) {
                _this.statusMessage =
                    'Employee with the specified Employee Code does not exist';
            }
            else {
                _this.employee = employeeData;
            }
        }, function (error) {
            _this.statusMessage =
                'Problem with the service. Please try again after sometime';
            console.error(error);
        });
    };
    return EmployeeComponent2;
}());
EmployeeComponent2 = __decorate([
    core_1.Component({
        selector: 'my-employee2',
        templateUrl: 'app/servicesImplementation2/employee.component.html'
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService2,
        router_1.ActivatedRoute])
], EmployeeComponent2);
exports.EmployeeComponent2 = EmployeeComponent2;
//# sourceMappingURL=employee.component.js.map