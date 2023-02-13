import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { FirstChildComponent }   from './components/first-child/first-child.component';
import { SecondChildComponent }   from './components/second-child/second-child.component';
import { DataModule }   from './data/data.module';

@NgModule({
    imports:      [ BrowserModule,/*  FormsModule, */ DataModule ],
    declarations: [ AppComponent, FirstChildComponent, SecondChildComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }