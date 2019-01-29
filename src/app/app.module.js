"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
//import { HttpModule } from '@angular/http';
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var bananaInABox_component_1 = require("./bananaInABox/bananaInABox.component");
var employeelist_component_1 = require("./employee/employeelist.component");
var employeelist2_component_1 = require("./employee/employeelist2.component");
var employeeTitle_pipe_1 = require("./employee/employeeTitle.pipe");
var employeelist_component_2 = require("./containerAndNestedComponent/employeelist.component");
var employeeCount_component_1 = require("./containerAndNestedComponent/employeeCount.component");
var employeelist_component_3 = require("./servicesImplementation/employeelist.component");
var employee_service_1 = require("./servicesImplementation/employee.service");
var employeelist_component_4 = require("./servicesImplementation2/employeelist.component");
var employee_service_2 = require("./servicesImplementation2/employee.service");
var employee_component_2 = require("./servicesImplementation2/employee.component");
var home_component_1 = require("./home/home.component");
var pageNotFound_component_1 = require("./pageNotFound/pageNotFound.component");
// Routes is an array of Route objects
// Each route maps a URL path to a component
// The 3rd route specifies the route to redirect to if the path
// is empty. In our case we are redirecting to /home
// The 4th route (**) is the wildcard route. This route is used
// if the requested URL doesn't match any other routes already defined
var appRoutes = [
    { path: 'home', component: home_component_1.homeComponent },
    { path: 'employees', component: employeelist_component_1.EmployeeListComponent },
    { path: 'employee/:code', component: employee_component_2.EmployeeComponent2 },
    { path: 'bananaInABoxComponent', component: bananaInABox_component_1.bananaInABoxComponent },
    { path: 'employeeListComponentAsContainer', component: employeelist_component_2.EmployeeListComponentAsContainer },
    { path: 'employeeService', component: employeelist_component_3.EmployeeList },
    { path: 'employeeService2', component: employeelist_component_4.EmployeeListComponent2 },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotFound_component_1.pageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, HttpModule, router_1.RouterModule.forRoot(appRoutes, { useHash: true })],
        declarations: [app_component_1.AppComponent, employee_component_1.employeeComponent, bananaInABox_component_1.bananaInABoxComponent,
            employeelist_component_1.EmployeeListComponent, employeelist2_component_1.EmployeeList2Component, employeeTitle_pipe_1.EmployeeTitlePipe, employeelist_component_2.EmployeeListComponentAsContainer, employeeCount_component_1.EmployeeCountComponent,
            employeelist_component_3.EmployeeList, home_component_1.homeComponent, pageNotFound_component_1.pageNotFoundComponent, employeelist_component_4.EmployeeListComponent2, employee_component_2.EmployeeComponent2],
        bootstrap: [app_component_1.AppComponent],
        providers: [employee_service_1.EmployeeService, employee_service_2.EmployeeService2]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map