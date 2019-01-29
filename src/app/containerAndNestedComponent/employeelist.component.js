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
var EmployeeListComponentAsContainer = (function () {
    function EmployeeListComponentAsContainer() {
        // This property keeps track of which radio button is selected
        // We have set the default value to All, so all the employees
        // are displayed in the table by default
        this.selectedEmployeeRadioButtonValue = 'All';
        this.employees = [
            {
                code: 'emp101', name: 'Tom', gender: 'Male',
                annualSalary: 5500, dateOfBirth: '6/25/1988'
            },
            {
                code: 'emp102', name: 'Alex', gender: 'Male',
                annualSalary: 5700.95, dateOfBirth: '9/6/1982'
            },
            {
                code: 'emp103', name: 'Mike', gender: 'Male',
                annualSalary: 5900, dateOfBirth: '12/8/1979'
            },
            {
                code: 'emp104', name: 'Mary', gender: 'Female',
                annualSalary: 6500.826, dateOfBirth: '10/14/1980'
            },
            {
                code: 'emp105', name: 'Nancy', gender: 'Female',
                annualSalary: 6700.826, dateOfBirth: '12/15/1982'
            },
            {
                code: 'emp106', name: 'Steve', gender: 'Male',
                annualSalary: 7700.481, dateOfBirth: '11/18/1979'
            },
        ];
    }
    EmployeeListComponentAsContainer.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeListComponentAsContainer.prototype.getMaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Male'; }).length;
    };
    EmployeeListComponentAsContainer.prototype.getFemaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Female'; }).length;
    };
    // Depending on which radio button is selected, this method updates
    // selectedEmployeeRadioButtonValue property declared above
    // This method is called when the child component (EmployeeCountComponent)
    // raises the custom event - countRadioButtonSelectionChanged
    // The event binding is specified in employeeList.component.html
    EmployeeListComponentAsContainer.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeRadioButtonValue = selectedRadioButtonValue;
    };
    return EmployeeListComponentAsContainer;
}());
EmployeeListComponentAsContainer = __decorate([
    core_1.Component({
        selector: 'my-employeelistAsContainer',
        templateUrl: 'app/containerAndNestedComponent/employeelist.component.html',
        styleUrls: ['app/containerAndNestedComponent/employeelist.component.css']
    }),
    __metadata("design:paramtypes", [])
], EmployeeListComponentAsContainer);
exports.EmployeeListComponentAsContainer = EmployeeListComponentAsContainer;
//# sourceMappingURL=employeelist.component.js.map