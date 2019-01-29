import { Injectable } from '@angular/core';
// Import Http & Response from angular HTTP module
import { Http, Response } from '@angular/http';
// Import Observable from rxjs/Observable
import { Observable } from 'rxjs/Observable';
// Import the map operator
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { IEmployee } from './employee';

@Injectable()
export class EmployeeService2 {
    // Inject Angular http service
    constructor(private _http: Http) { }

    getEmployees(): Observable<IEmployee[]> {
        // To convert Observable<Response> to Observable<IEmployee[]>
        // we are using the map operator
        return this._http.get('http://localhost:1967/api/employees')
            .map((response: Response) => <IEmployee[]>response.json());
    }

    getEmployeeByCode(empCode: string): Observable<IEmployee> {
        return this._http.get("http://localhost:1967/api/employees/" + empCode)
            .map((response: Response) => <IEmployee>response.json())
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}