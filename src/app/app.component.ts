import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import {tap} from "rxjs"
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tutoriasItsa';
  data=""
  public showNavbar=true
  public rutas:string[]=['/login','/registro']

constructor(private readonly httpClient:HttpClient,private api:ApiService,private router:Router){}



  ngOnInit(): void {
  
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verificar la ruta actual y ocultar el navbar si es necesario
        this.showNavbar=  !this.rutas.includes(event.url)
      
      }
      })
 this.api.getData().pipe(
    tap((res:any)=>{
      this.data=res
    })
  ).subscribe()


  }

  eventToRedirect():void{
alert('hola')


  }



}
