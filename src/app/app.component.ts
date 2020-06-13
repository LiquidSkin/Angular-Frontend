import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Frontend';
  myVariable = "app";
  myVar2 = "123";

  variable2: string = "hello";

  onClickSubmit(formdata)
  {
    console.log('email', formdata.email);
  }

  func3(e)
  {
    console.log(this.variable2);
  }

  constructor()
  {
    console.log(this.myVar2);
    
  }

  func1(e)
  {
    this.myVariable = e.target.value;
    console.log(this.myVariable);
    console.log(this.myVar2); 
    console.log("Function called");
  }
}
