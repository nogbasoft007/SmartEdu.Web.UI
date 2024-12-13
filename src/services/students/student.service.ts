import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from '../../models/students/students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'https://localhost:7123/api/students'; // API Gateway URL

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getStudents(): Observable<Student[]> {debugger
    return this.http.get<Student[]>(this.apiUrl).pipe(
      catchError(this.handleError<Student[]>('getStudents', []))
    );
  }

  getStudent(id: number): Observable<Student> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Student>(url).pipe(
      catchError(this.handleError<Student>(`getStudent id=${id}`))
    );
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student, this.httpOptions).pipe(
      catchError(this.handleError<Student>('addStudent'))
    );
  }

  updateStudent(student: Student): Observable<any> {
    const url = `${this.apiUrl}/${student.id}`;
    return this.http.put(url, student, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateStudent'))
    );
  }

  deleteStudent(id: number): Observable<Student> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Student>(url, this.httpOptions).pipe(
      catchError(this.handleError<Student>('deleteStudent'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
