import { Component } from '@angular/core'

@Component({
    selector: 'app-home',
    templateUrl: `app/home/home.component.html`
})
export class homeComponent {
    pageHeader: string = 'Employee Details';
    imagePath: string = 'images/logo.jpg';
    imageFullPath: string = 'http://pragimtech.com/images/logo.jpg';
}