import { Component, Input, input, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table'; // Import the TableModule
import { StudentService } from '../../../../services/students/student.service';
import { Student } from '../../../../models/students/students.model';

@Component({
  selector: 'app-student-list-view',
  standalone: true,
  imports: [TableModule], // Include the module here
  templateUrl: './student-list-view.component.html',
  styleUrl: './student-list-view.component.css'
})
export class StudentListViewComponent  implements OnInit  {
  
  @Input() i_Students: Student[] = []; // Input property to receive Student data
  //students: Student[] = []; // Array to hold the list of students
  errorMessage: string | null = null;


  constructor() {}
  
  ngOnInit(): void {
    
  }

  students = [
    { name: 'John Doe', class: '1', section: 'A' },
    { name: 'Jane Smith', class: '2', section: 'B' },
    { name: 'John Doe', class: '1', section: 'A' },
    { name: 'Jane Smith', class: '2', section: 'B' },
    { name: 'John Doe', class: '1', section: 'A' },
    { name: 'Jane Smith', class: '2', section: 'B' },
    { name: 'John Doe', class: '1', section: 'A' },
    { name: 'Jane Smith', class: '2', section: 'B' },
    // Add more student data here
  ];

  cols = [
    { field: 'name', header: 'Name' },
    { field: 'class', header: 'Class' },
    { field: 'section', header: 'Section' }
  ];







}