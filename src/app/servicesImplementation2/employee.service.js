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
// Import Http & Response from angular HTTP module
var http_1 = require("@angular/http");
// Import Observable from rxjs/Observable
var Observable_1 = require("rxjs/Observable");
// Import the map operator
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/Observable/throw");
var EmployeeService2 = (function () {
    // Inject Angular http service
    function EmployeeService2(_http) {
        this._http = _http;
    }
    EmployeeService2.prototype.getEmployees = function () {
        // To convert Observable<Response> to Observable<IEmployee[]>
        // we are using the map operator
        return this._http.get('http://localhost:1967/api/employees')
            .map(function (response) { return response.json(); });
    };
    EmployeeService2.prototype.getEmployeeByCode = function (empCode) {
        return this._http.get("http://localhost:1967/api/employees/" + empCode)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmployeeService2.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    return EmployeeService2;
}());
EmployeeService2 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService2);
exports.EmployeeService2 = EmployeeService2;
//# sourceMappingURL=employee.service.js.map