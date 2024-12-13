import { Routes } from '@angular/router';

import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { FeesComponent } from './components/fees/fees.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { ExamsComponent } from './components/exams/exams.component';
import { AttendancesComponent } from './components/attendances/attendances.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';

export const routes: Routes = [

    {
        path: '',
        component: DashbordComponent
        
    },
    { path: 'dashboard', component: DashbordComponent 

    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' 

    },
    {
        path: 'students',
        component: StudentsComponent
    },
    {
        path: 'teachers',
        component: TeachersComponent,
        children: [
            {
            path: '**',
            component: TeachersComponent
            }
        ]
    },
    {
        path: 'fees',
        component: FeesComponent
    },
    {
        path: 'subjects',
        component: SubjectsComponent
    }
    ,
    {
        path: 'exams',
        component: ExamsComponent
    }
    ,
    {
        path: 'attendances',
        component: AttendancesComponent
    }


];
