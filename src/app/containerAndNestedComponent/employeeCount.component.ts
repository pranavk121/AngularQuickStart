﻿import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'app/containerAndNestedComponent/employeeCount.component.html',
    styleUrls: ['app/containerAndNestedComponent/employeeCount.component.css']
})
export class EmployeeCountComponent {
    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;

    // Holds the selected value of the radio button
    selectedRadioButtonValue: string = 'All';

    // The Output decorator makes the property an Output property
    // EventEmitter class is used to create the custom event
    // When the radio button selection changes, the selected
    // radio button value which is a string gets passed to the
    // event handler method. Hence, the event payload is string.
    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> =
        new EventEmitter<string>();

    // This method raises the custom event. We will bind this
    // method to the change event of all the 3 radio buttons
    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged
            .emit(this.selectedRadioButtonValue);
    }
}