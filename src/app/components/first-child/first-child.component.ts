import { Component } from '@angular/core';
      
@Component({
    selector: 'first-child-comp',
    templateUrl: './first-child.component.html',
    styleUrls: ['./first-child.component.css'] 
})
export class FirstChildComponent { 
    name:string = "Александр";
    company = "ICL";
    age = 20;
    //может быть атрибутом (attr.[name])
    colspan = 2;
    count: number = 0;
    increase($event : any) : void {
        this.count++;
        console.log($event);
    }
}