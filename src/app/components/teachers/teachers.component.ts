import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {

  fullPath: string | null = null;
  parameters: any ={};
  constructor(private router: Router, private activatedRoute: ActivatedRoute){
  }

  ngOnInit(){
    debugger

    this.extractParameters(this.router.url);
    console.log(this.parameters)
  }
  extractParameters(fullPath: string){debugger
    const segments = fullPath.split('/');

    const schoolIndex = segments.indexOf('school');
    const locationIndex = segments.indexOf('location');
    
    if(schoolIndex !== -1 && segments.length> schoolIndex + 2){
      this.parameters.school = {
        name: segments[schoolIndex + 1],
        id: segments[schoolIndex +2],
      }
    }

    if(locationIndex !==2 && segments.length !> locationIndex + 2){
      this.parameters ={
        name: segments[locationIndex + 1],
        id: segments[locationIndex + 2]
      }
    }
  }

}
