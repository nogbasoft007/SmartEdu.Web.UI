import { Component } from '@angular/core';
import { MainTopbarComponent } from "../main-topbar/main-topbar.component";
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [MainTopbarComponent, DropdownModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {
headerLogo: any;

}
