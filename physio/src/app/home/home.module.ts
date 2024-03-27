import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NavbarComponent} from './navbar/navbar.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TestimonialComponent } from './testimonial/testimonial.component'
import { FooterComponent } from './footer/footer.component';
import {AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [NavbarComponent, HomeComponent, FooterComponent, TestimonialComponent, AboutComponent, ContactUsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule 
  ]
})
export class HomeModule { }
