import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { PersonaGuardService as guard } from './guards/persona-guard.service';
import { AddComponent } from './Persona/add/add.component';
import { EdiComponent } from './Persona/edi/edi.component';
import { EstudioAddComponent } from './Persona/estudio-add/estudio-add.component';
import { EstudioEdiComponent } from './Persona/estudio-edi/estudio-edi.component';
import { ExperienciaAddComponent } from './Persona/experiencia-add/experiencia-add.component';
import { ExperienciaEdiComponent } from './Persona/experiencia-edi/experiencia-edi.component';
import { NadaComponent } from './Persona/nada/nada.component';
import { ProyectoAddComponent } from './Persona/proyecto-add/proyecto-add.component';
import { ProyectoEdiComponent } from './Persona/proyecto-edi/proyecto-edi.component';
import { SkillAddComponent } from './Persona/skill-add/skill-add.component';
import { SkillEdiComponent } from './Persona/skill-edi/skill-edi.component';

const routes: Routes = [
  {path:'add', component:AddComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path:'edit', component:EdiComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path:'addP',component:ProyectoAddComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path:'editP',component:ProyectoEdiComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path:'home',component:NadaComponent},
  {path:'editExp',component:ExperienciaEdiComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path:'addExp',component:ExperienciaAddComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path:'editS',component:SkillEdiComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path:'addS',component:SkillAddComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path:'editE',component:EstudioEdiComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path:'addE',component:EstudioAddComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path:'',component:NadaComponent},
  {path:'logueado',component:NadaComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
