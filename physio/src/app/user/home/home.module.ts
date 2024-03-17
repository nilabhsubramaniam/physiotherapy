import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';

import { HomeRoutingModule } from './home-routing.module';


import { StyleClassModule } from 'primeng/styleclass';

import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DividerModule,
 
    StyleClassModule,
    ChartModule,
    PanelModule,
    ButtonModule
  ]
})
export class HomeModule { }
