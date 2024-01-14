import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is interpolated';
  clientName = 'Michael';
  appliedCSS = 'green';
  notAppliedCSS = false;
  myColor = 'red';
  
  showData($event: any) {
    console.log('Button is clicked');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  clickCount = 0;
  clickMe(){
    this.clickCount++;
  }

}