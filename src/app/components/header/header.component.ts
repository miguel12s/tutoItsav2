import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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
//  this.api.getData().pipe(
//     tap((res:any)=>{
//       this.data=res
//     })
//   ).subscribe()


  }

  eventToRedirect():void{
alert('hola')


  }

}
