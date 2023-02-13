import {
  Component, Input, Output, EventEmitter, OnInit, OnChanges, AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'first-child-comp',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit {

  @ContentChild("headerContent", { static: false })
  header: ElementRef | undefined

  change() {
    if (this.header !== undefined) {
      console.log(this.header);
      this.header.nativeElement.textContent = "Hell to world!";
    }
  }

  name: string = "Александр";
  company = "ICL";
  age = 20;
  //может быть атрибутом (attr.[name])
  colspan = 2;
  count1: number = 0;
  count: number = 0;

  _userAge: number = 0;

  @Input()
  set userAge(age: number) {
    if (age < 18)
      this._userAge = 0;
    else if (age > 100)
      this._userAge = 100;
    else
      this._userAge = age;
  }
  get userAge() { return this._userAge; }

  increase($event: any): void {
    this.count1++;
    console.log($event);
  }

  @Input() userName: string = "";
  @Output() userNameChange = new EventEmitter<string>();
  onNameChange(model: string) {

    this.userName = model;
    this.userNameChange.emit(model);
  }

  ngOnInit() {

    this.log(`ngOnInit`);
  }
  ngOnChanges() {

    this.log(`OnChanges`);
  }
  ngDoCheck() {

    this.log(`ngDoCheck`);
  }
  ngAfterViewInit() {

    this.log(`ngAfterViewInit`);
  }
  ngAfterViewChecked() {

    this.log(`ngAfterViewChecked`);
  }
  ngAfterContentInit() {

    this.log(`ngAfterContentInit`);
  }
  ngAfterContentChecked() {

    this.log(`ngAfterContentChecked`);
  }

  private log(msg: string) {
    console.log(this.count + ". " + msg);
    this.count++;
  }
}