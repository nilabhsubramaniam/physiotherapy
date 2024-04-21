import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
    constructor(private router: Router) {
    
    }

    redirectToPage() {
        this.router.navigate(['/contact']);
    }

    ngOnInit(): void {
       
        this.router.events.subscribe((event: any) => {
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

    }
}
