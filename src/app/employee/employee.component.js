"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var employeeComponent = (function () {
    function employeeComponent() {
        this.firstName = "Pranav";
        this.lastName = "Kumar";
        this.gender = "Male";
        this.age = 25;
        this.columnSpan = 2;
        this.classesToApply = 'italicsClass boldClass';
        this.applyBoldClass = true;
        this.applyItalicsClass = true;
        this.isBold = true;
        this.fontSize = 30;
        this.isItalic = true;
        this.showDetails = false;
    }
    employeeComponent.prototype.addClasses = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass
        };
        return classes;
    };
    employeeComponent.prototype.addStyles = function () {
        var styles = {
            'font-weight': this.isBold ? 'bold' : 'normal',
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-size.px': this.fontSize
        };
        return styles;
    };
    employeeComponent.prototype.onClick = function () {
        alert('Button Clicked');
    };
    employeeComponent.prototype.toggleView = function () {
        this.showDetails = !this.showDetails;
    };
    return employeeComponent;
}());
employeeComponent = __decorate([
    core_1.Component({
        selector: 'my-employee',
        templateUrl: "app/employee/employee.component.html"
    })
], employeeComponent);
exports.employeeComponent = employeeComponent;
//# sourceMappingURL=employee.component.js.map