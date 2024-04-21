import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';

import { ServiceComponent } from './services/service/service.component';
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServiceComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'privacy', component: PrivacyNoticeComponent }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
