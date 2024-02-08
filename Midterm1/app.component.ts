import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval} from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template:`
  <div style="text-align:center">
     <h3>Decimal Pipe</h3>
     <p> {{decimalNum1 | number}}</p>
     <p> {{decimalNum2 | number}}</p>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Midterm1';
  presentDate = new Date();
  time$: Observable<Date>;
  
  data: object = {
    name: 'Ulrich Oconer', age:20, food:'Sisig',
    languages:[
      {lname:'JS',level:'Average'},
      {lname:'Python',level:'Wizard'},
      {lname:'Cobol',level:'Beginner'},
    ]
  }

  Fruits = ['Apple', 'Orange', 'Grapes', 'Mango', 'Kiwi', 'Pomegranate'];
    decimalNum1: number = 8.7589623;
    decimalNum2: number = 5.43;
    price : number = 20000;
    a: number = 0.259;
    b: number = 1.3495;
    ngOnInit(){}
  constructor(){
    this.time$ = interval(1000).pipe(
      map(() => new Date())
    );
  }
}
