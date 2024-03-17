import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LayoutService } from '../../layout/services/layout.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public router: Router, public layoutService: LayoutService) { }

}
