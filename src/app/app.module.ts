import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
//import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { employeeComponent } from './employee/employee.component';
import { bananaInABoxComponent } from './bananaInABox/bananaInABox.component';
import { EmployeeListComponent } from './employee/employeelist.component';
import { EmployeeList2Component } from './employee/employeelist2.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeListComponentAsContainer } from './containerAndNestedComponent/employeelist.component'
import { EmployeeCountComponent } from './containerAndNestedComponent/employeeCount.component'
import { EmployeeList } from './servicesImplementation/employeelist.component'
import { EmployeeService } from './servicesImplementation/employee.service'
import { EmployeeListComponent2 } from './servicesImplementation2/employeelist.component'
import { EmployeeService2 } from './servicesImplementation2/employee.service'
import { EmployeeComponent2 } from './servicesImplementation2/employee.component'
import { homeComponent } from './home/home.component'
import { pageNotFoundComponent } from './pageNotFound/pageNotFound.component'

// Routes is an array of Route objects
// Each route maps a URL path to a component
// The 3rd route specifies the route to redirect to if the path
// is empty. In our case we are redirecting to /home
// The 4th route (**) is the wildcard route. This route is used
// if the requested URL doesn't match any other routes already defined
const appRoutes: Routes = [
    { path: 'home', component: homeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employee/:code', component: EmployeeComponent2 },
    { path: 'bananaInABoxComponent', component: bananaInABoxComponent },
    { path: 'employeeListComponentAsContainer', component: EmployeeListComponentAsContainer },
    { path: 'employeeService', component: EmployeeList },
    { path: 'employeeService2', component: EmployeeListComponent2 },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes, { useHash: true })],
    declarations: [AppComponent, employeeComponent, bananaInABoxComponent,
        EmployeeListComponent, EmployeeList2Component, EmployeeTitlePipe, EmployeeListComponentAsContainer, EmployeeCountComponent,
        EmployeeList, homeComponent, pageNotFoundComponent, EmployeeListComponent2, EmployeeComponent2],
    bootstrap: [AppComponent],
    providers: [EmployeeService, EmployeeService2]
})
export class AppModule { }
