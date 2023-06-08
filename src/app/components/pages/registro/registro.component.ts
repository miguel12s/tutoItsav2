import { Component, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  nombres:new FormControl ('',[Validators.required]),
  apellidos:['',Validators.required],
  tipoDocumento:['',Validators.required],
  contraseña:['',[Validators.required,Validators.minLength(7)]],
  programa:['',Validators.required],
  numeroTelefono: new FormControl('',[Validators.required,Validators.minLength(2)]),
  correo:['',Validators.email],
  nuevaContraseña:['',Validators.required,Validators.minLength(7),Validators.maxLength(50)
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


