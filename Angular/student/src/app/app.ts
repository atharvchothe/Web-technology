import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from './student/student';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, Student],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'student-app';
}