import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {

  studentName: string = '';
  studentPRN: string = '';

  studentList: any[] = [];

  addStudent() {

    if (this.studentName && this.studentPRN) {

      const student = {
        name: this.studentName,
        prn: this.studentPRN
      };

      this.studentList.push(student);

      this.studentName = '';
      this.studentPRN = '';
    }

  }

}