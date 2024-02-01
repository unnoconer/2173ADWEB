import { Component } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {
  name: string = '';
  last: string = '';
  email: string = '';
  instituition: string = '';
  submitted: boolean = false;

  submitForm() {
    // Logic to handle form submission
    this.submitted = true;
  }
}