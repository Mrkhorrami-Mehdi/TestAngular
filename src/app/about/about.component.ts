import { Component, OnInit } from '@angular/core';
import { FormGroup , Validator , FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  flag = true;

  constructor() { }
   login:any
  ngOnInit(): void {
      this.login = new FormGroup({
      email: new FormControl('',[Validators.required , Validators.email]),
      pass : new FormControl('',[Validators.required,Validators.minLength(8)]),
      name : new FormControl('',[Validators.required]) 
    })
  }
  onSubmit(){
    console.log(this.login.value)
  }

}
