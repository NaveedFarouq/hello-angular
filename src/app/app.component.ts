import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']
}) 
export class AppComponent implements OnInit { 
  title: string = 'Items in Bag'; 
  items: Array<string> = []; 
  loading: boolean = false;  

  ngOnInit () { 
    this.loading = true;  
    setTimeout(() => { 
      this.items = [ 
         'Pen', 
         'Note', 
         'Mug', 
         'Charger', 
         'Passport', 
         'Keys' 
      ] 
     this.loading = false; 
   }, 3000) 
  } 

  //component communication
  comments = [
    {
      author: 'Jay Kay',
      content: 'TypeScript makes Angular awesome'
    },
    {
      author: 'William',
      content: 'Yeah, right!'
    },
    {
      author: 'Raphael',
      content: 'Got stuck passing data around'
    }
  ]

}
