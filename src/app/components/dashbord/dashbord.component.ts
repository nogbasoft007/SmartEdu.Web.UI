import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [CardModule, ChartModule],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {
  chartData: any;

  constructor() {
    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Sales',
          data: [65, 59, 80, 81, 56],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4
        },
        {
          label: 'Revenue',
          data: [28, 48, 40, 19, 86],
          fill: false,
          borderColor: '#FFA726',
          tension: 0.4
        }
      ]
    };
  }
}
