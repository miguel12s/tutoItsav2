import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
contactForm!:FormGroup
showAlert=false
constructor(public fb:FormBuilder){

  this.contactForm=fb.group({
    email:['',Validators.email,],
    password:['',Validators.required,Validators.min(60)]
  })

}
validarInput() {
  if (!this.contactForm.get('email')?.invalid) {
    this.showAlert = false;
  } else {
    this.showAlert = true;
  }

}
}
