import { Routes } from '@angular/router';

import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';

export const routes: Routes = [

    {
        path: 'students',
        component: StudentsComponent
    },
    {
        path: 'teachers',
        component: TeachersComponent
    }
];
