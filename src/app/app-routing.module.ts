import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistroComponent } from './components/pages/registro/registro.component';

const routes: Routes = [


  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'**',redirectTo:'login',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
