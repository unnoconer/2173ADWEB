import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  appliedCSS = 'green';
  notAppliedCSS = false;
  myColor = 'red';
  year = '2024';
  title = 'Prelims Exam';
}
