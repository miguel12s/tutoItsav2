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
  data=''
  li=document.getElementsByClassName('.active')
constructor(private readonly httpClient:HttpClient,private api:ApiService){}



  ngOnInit(): void {
    console.log('entras');
    
  // //  this.api.getData().pipe(
  // //   tap((res:any)=>{
  // //     this.data=res
      
  // //   })
  //  ).subscribe()
  }

  eventToRedirect():void{
alert('hola')
console.log(this.li);

  }



}
