import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel'; // Import the PanelModule
import { DropdownModule } from 'primeng/dropdown'; // Import DropdownModule if needed
import { StudentListViewComponent } from './student-list-view/student-list-view.component';
import { Student } from '../../../models/students/students.model';
import { StudentService } from '../../../services/students/student.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [StudentListViewComponent, PanelModule, DropdownModule], // Include the modules here
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students: Student[] = []; // Array to hold the list of students
  errorMessage: string | null = null; // Optional: Error message holder
  
  constructor(private studentService: StudentService) {

  }
  ngOnInit(): void {debugger
    this.getStudents();
  }

  // Sevice function
   getStudents(): void {
    this.studentService.getStudents().subscribe({
      next: (data: Student[]) => {
        this.students = data; // Assign the fetched data to the students array
      },
      error: (err: any) => {
        this.errorMessage = 'An error occurred while fetching the student data.';
        console.error('Error fetching students:', err);
      }
    });

  }
}
