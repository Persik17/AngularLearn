import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
 
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'] 
})
export class AppComponent {
    name:string="Tom";
    age:number = 24;

    clicks:number = 0;
    onChanged(increased:any){
        increased==true?this.clicks++:this.clicks--;
    }

    /* constructor(){ this.log(`constructor`); }
    ngOnInit() { this.log(`onInit`); }
 
    ngOnDestroy() { this.log(`onDestroy`); } */
 
    ngOnChanges(changes: SimpleChanges) {
        for (let propName in changes) {
          let chng = changes[propName];
          let cur  = JSON.stringify(chng.currentValue);
          let prev = JSON.stringify(chng.previousValue);
          this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
      }
   
      private log(msg: string) {
          console.log(msg);
      }
 }