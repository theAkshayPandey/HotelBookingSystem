import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required , Validators.email]),
    password: new FormControl('',[Validators.required]),
    repeatPassword: new FormControl('',[Validators.required, this.passwordMatch])
  });


  constructor() { 
    console.log('userform',this.userForm)
  }

  passwordMatch(control: FormControl){
    const password = control.root.get('password');
    return password && control.value !== password.value
    ?
      {
        passwordMatch:true
      }
    :   null;
  }

  ngOnInit() {}
  
  register(){
    if(!this.userForm.valid) {
      return;
    }  
    const user=this.userForm.getRawValue();
  }

 
  get name(){
    return this.userForm.get('name');
  }
  get email(){
    return this.userForm.get('email');
  }
  get password(){
    return this.userForm.get('password');
  }
  get repeatPassword(){
    return this.userForm.get('repeatPassword');
  }
}
