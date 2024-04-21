import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TestimonialComponent } from './testimonial/testimonial.component'
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TabViewModule } from 'primeng/tabview';
import { ServiceComponent } from './services/service/service.component';
import {  PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component'
@NgModule({
    declarations: [NavbarComponent, HomeComponent, FooterComponent, TestimonialComponent, AboutComponent, ContactUsComponent, ServiceComponent, PrivacyNoticeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToggleButtonModule,
        MenuModule,
        TabViewModule,
        CardModule
    ]
})
export class HomeModule { }
