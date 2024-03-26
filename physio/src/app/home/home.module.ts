import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TestimonialComponent } from './testimonial/testimonial.component'
import { FooterComponent } from './footer/footer.component';
import {AboutComponent } from './about/about.component'

@NgModule({
  declarations: [NavbarComponent, HomeComponent, FooterComponent, TestimonialComponent, AboutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
