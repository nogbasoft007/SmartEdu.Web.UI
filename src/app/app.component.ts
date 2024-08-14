import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar'
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { MainHeaderComponent } from "./layouts/main-header/main-header.component";
import { MainTopbarComponent } from "./layouts/main-topbar/main-topbar.component";
import { MainFooterComponent } from "./layouts/main-footer/main-footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    MenubarModule,
    MainLayoutComponent,
    MainHeaderComponent,
    MainTopbarComponent,
    MainFooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'SmartEducation.Web.UI';
  items: MenuItem[] | undefined;

ngOnInit(){

  this.items = [
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
]

}

}
