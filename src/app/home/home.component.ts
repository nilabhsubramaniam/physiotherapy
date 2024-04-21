import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',

    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    darkMode: boolean = false;
    constructor(private router: Router) {


    }
    toggleDarkMode() {
        this.darkMode = !this.darkMode;
    }
    redirectToPage() {
        this.router.navigate(['/contact']); // Replace '/your-route' with the route you want to navigate to
    }

}
