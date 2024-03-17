import { Routes } from '@angular/router';
import { LayoutComponent} from './layout/layout.component'
import { HomeModule } from './home/home.module';

export const routes: Routes = [
    {
        path:'',
       loadChildren: () => import ('./home/home.module').then(m => HomeModule)
    }
];
