import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutModule } from './layout/layout.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(private primengConfig: PrimeNGConfig) { }
  title = 'physio';
  ngOnInit() {
    this.primengConfig.ripple = true;
    }

}
