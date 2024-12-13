import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-attendances',
  standalone: true,
  imports: [CardModule, TableModule, ProgressBarModule],
  templateUrl: './attendances.component.html',
  styleUrl: './attendances.component.css'
})
export class AttendancesComponent {
  overallAttendance: number = 92; // Overall attendance percentage
  attendanceRecords = [
    { date: '2024-08-01', present: 1150, absent: 50 },
    { date: '2024-08-02', present: 1120, absent: 80 },
    { date: '2024-08-03', present: 1100, absent: 100 },
    // Add more records as needed
  ];
}
