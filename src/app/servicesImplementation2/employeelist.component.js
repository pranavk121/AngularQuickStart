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
var EmployeeListComponent2 = (function () {
    function EmployeeListComponent2(_employeeService) {
        this._employeeService = _employeeService;
    }
    EmployeeListComponent2.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (employeesData) { return _this.employees = employeesData; });
    };
    return EmployeeListComponent2;
}());
EmployeeListComponent2 = __decorate([
    core_1.Component({
        selector: 'my-employeelistAsService2',
        templateUrl: 'app/servicesImplementation2/employeelist.component.html',
        styleUrls: ['app/servicesImplementation2/employeelist.component.css']
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService2])
], EmployeeListComponent2);
exports.EmployeeListComponent2 = EmployeeListComponent2;
//# sourceMappingURL=employeelist.component.js.map