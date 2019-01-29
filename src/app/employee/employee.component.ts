import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl:`app/employee/employee.component.html`
})
export class employeeComponent {
    firstName: string = "Pranav";
    lastName: string = "Kumar";
    gender: string = "Male";
    age: number = 25;
    columnSpan: number = 2;
    classesToApply: string = 'italicsClass boldClass';
    applyBoldClass: boolean = true;
    applyItalicsClass: boolean = true;

    addClasses() {
        let classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass
        };

        return classes;
    }

    isBold: boolean = true;
    fontSize: number = 30;
    isItalic: boolean = true;

    addStyles() {
        let styles = {
            'font-weight': this.isBold ? 'bold' : 'normal',
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-size.px': this.fontSize
        };

        return styles;
    }

    onClick(): void {
        alert('Button Clicked');
    }

    showDetails: boolean = false;
    toggleView(): void {
        this.showDetails = !this.showDetails;
    }
}