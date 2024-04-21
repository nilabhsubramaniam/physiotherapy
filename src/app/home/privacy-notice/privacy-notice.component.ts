import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-privacy-notice',
  templateUrl: './privacy-notice.component.html',
  styleUrl: './privacy-notice.component.scss'
})
export class PrivacyNoticeComponent  implements OnInit {

     constructor( private router: Router){
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
