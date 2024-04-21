import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
    year: any;
    constructor(private router: Router) {
        const currentDate = new Date();
        this.year = currentDate.getFullYear();
       

    }
    redirectToPage() {
        this.router.navigate(['/contact']); // Replace '/your-route' with the route you want to navigate to
    }

    ngOnInit(): void {

        this.router.events.subscribe((event:any) => { 
            if (!(event instanceof NavigationEnd)) { 
                return; 
            } 
            window.scrollTo(0, 0) 
        }); 
    
    }

}
