import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  contactForm!:FormGroup
  public showAlertDanger=false
  submitted=false
  constructor(public fb:FormBuilder){
this.contactForm=fb.group({
  nombres:['',{validators:[Validators.required]}],
  apellidos:['',Validators.required],
  tipoDocumento:['',Validators.required],
  contraseña:['',Validators.required],
  programa:['',Validators.required],
  numeroTelefono:['',Validators.required],
  correo:['',Validators.email],
  nuevaContraseña:['',Validators.required
],



})
  }
  validarCorreo(){
    if (!this.contactForm.get('correo')?.invalid) {
      this.showAlertDanger = false;
    } else {
      this.showAlertDanger = true;
    }
  }
  onSubmit(){
    this.submitted=true

    if(this.contactForm.invalid){
      return 
    }



  }
    
  }


