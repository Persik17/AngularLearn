import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
      
@Component({
    selector: 'second-child-comp',
    templateUrl: './second-child.component.html',
    styleUrls: ['./second-child.component.css'] 
})
export class SecondChildComponent { 
    isYellow = false;
    isYellow2 = false;

    @Output() onChanged = new EventEmitter<boolean>();
    change(increased:any) {
        this.onChanged.emit(increased);
    }

    @Input() userName:string = "";

    constructor(){ this.log(`constructor`); }
    ngOnInit() { this.log(`onInit`); }

    @Output() userNameChange = new EventEmitter<string>();
    onNameChange(model: string){
         
        this.userName = model;
        this.userNameChange.emit(model);
    }

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