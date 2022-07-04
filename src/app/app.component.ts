import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  login = new FormGroup({
    email: new FormControl('',[Validators.required , Validators.email]),
    pass : new FormControl('',[Validators.required,Validators.minLength(8)]),
  })

  onSubmit(){
    console.log(this.login.value)
  }
}
