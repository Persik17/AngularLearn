import { Component, OnInit, OnDestroy, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { SecondChildComponent} from './components/second-child/second-child.component';
 
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'] 
})
export class AppComponent {

    @ViewChild(SecondChildComponent, {static: false})
    private counterComponent: SecondChildComponent|undefined;
    increment() { this.counterComponent?.increment(); }
    decrement() { this.counterComponent?.decrement(); }

    @ViewChild("nameText", {static: false})
    nameParagraph: ElementRef|undefined;

    change() {
        if(this.nameParagraph!==undefined){
            console.log(this.nameParagraph.nativeElement.textContent); 
            this.numberName++;
            if(this.numberName == 7) {
                this.nameParagraph.nativeElement.textContent = "hell";
            } else {
                this.nameParagraph.nativeElement.textContent = "return Tom";
            }
        }
    }

    name:string="Tom";
    age:number = 24;
    numberName:number = 0;

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