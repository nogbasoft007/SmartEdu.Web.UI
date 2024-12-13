export class Student {
    id: number | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    dateOfBirth: Date | undefined;
    class: string | undefined;
    section: string | undefined;
    gender?: string | undefined;
    address?: string;
    email?: string;
    phoneNumber?: string;
    guardianName?: string;
    enrollmentDate?: Date;
  
    constructor(init?: Partial<Student>) {
      Object.assign(this, init);
    }
  
    // You can add methods here to manipulate or format the student data if needed
  }
  
