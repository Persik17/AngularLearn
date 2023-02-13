import { Component} from '@angular/core';
        
@Component({
    selector: 'data-comp',
    template: `<div><h3>{{message}}</h3></div>`
})
export class DataComponent{ 
      
    message: string = "DataModule";
}