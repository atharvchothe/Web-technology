import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, DashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  username = '';
  password = '';
  message: string = '';
  isLoggedIn: boolean = false;

  login() {
    if (this.username === 'admin' && this.password === '1234') {
      this.message = "Login Successful";
      this.isLoggedIn = true;
    }
    else {
      this.message = "Invalid Username or Password";
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.message = '';
    this.username = '';
    this.password = '';
  }

}