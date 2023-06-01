import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import {tap} from "rxjs"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tutoriasItsa';
  data=""
  public programas:string[]=[]

constructor(private readonly httpClient:HttpClient,private api:ApiService){}



  ngOnInit(): void {
  
    
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
