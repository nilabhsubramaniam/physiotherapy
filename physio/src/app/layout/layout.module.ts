import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { MenuItemComponent } from '../layout/menu-item/menu-item.component';
import { MenuComponent } from './menu/menu.component';
import { TopbarComponent } from '../layout/topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { ConfigModule} from './config/config.module';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { DividerModule } from 'primeng/divider';
import { LayoutComponent } from "./layout.component";


@NgModule({
  declarations: [ 
      LayoutComponent,
      MenuItemComponent,
      TopbarComponent,
      MenuComponent,
    FooterComponent,
    SidebarComponent,
],
  imports: [
    CommonModule,
        FormsModule,
        HttpClientModule,
      
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        ConfigModule,
        DividerModule
     
      
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
