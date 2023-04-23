import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../Persona/modelo/proyecto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http:HttpClient) {}
    
  authURL = environment.authUrl;

  getProyecto(){
    return this.http.get<Proyecto[]>(this.authURL+'proyectos/traer');
}
createProyecto(proyecto:Proyecto){
  return this.http.post<Proyecto>(this.authURL+'proyectos/crear',proyecto);
}
getProyectoId(id:number){
  return this.http.get<Proyecto>(this.authURL+"proyectos/"+id);
}
updateProyecto(proyecto:Proyecto){
  return this.http.put<Proyecto>(this.authURL+"proyectos/editar/"+proyecto.id,proyecto);
}
deleteProyecto(proyecto:Proyecto){
  return this.http.delete<Proyecto>(this.authURL+"proyectos/borrar/"+proyecto.id);
}
}
