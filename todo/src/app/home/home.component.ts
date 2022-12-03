import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  favouriteIcon='home';
    listitem ={
    title: 'Do my Video',
    dueDate:'23/07/2020',
    complited:false,
    favourite:false
    };
    listitem1 ={
      title: 'Improve Design',
      dueDate:'21/01/2022',
      complited:false,
      favourite:false
      };
    listitem2 ={
        title: 'Work Market',
        dueDate:'14/04/2023',
        complited:true,
        favourite:true
        };

  constructor() { }

  ngOnInit(): void {
  }
loglistItems(){
console.table([
this.listitem,
this.listitem1,
this.listitem2,

]);
console.log(this.favouriteIcon);
}

}
