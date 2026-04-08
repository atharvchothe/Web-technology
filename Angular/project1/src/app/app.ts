import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../home/home';
import { Addstudent } from '../addstudent/addstudent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home, Addstudent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project1');
}
