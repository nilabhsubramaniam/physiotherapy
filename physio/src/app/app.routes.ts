import { Routes } from '@angular/router';
import { LayoutComponent} from './layout/layout.component'
import { LandingPageComponent } from './layout/landing-page/landing-page.component';

export const routes: Routes = [
    {
        path:'',
        component:LandingPageComponent
    }
];
