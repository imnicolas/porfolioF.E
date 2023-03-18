import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../Persona/modelo/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http:HttpClient) {}
    
  URL='http://localhost:8080/proyectos';
  Url='https://suareznicolas.onrender.com/proyectos';

  getProyecto(){
    return this.http.get<Proyecto[]>(this.Url+'/traer');
}
createProyecto(proyecto:Proyecto){
  return this.http.post<Proyecto>(this.Url+'/crear',proyecto);
}
getProyectoId(id:number){
  return this.http.get<Proyecto>(this.Url+"/"+id);
}
updateProyecto(proyecto:Proyecto){
  return this.http.put<Proyecto>(this.Url+"/editar/"+proyecto.id,proyecto);
}
deleteProyecto(proyecto:Proyecto){
  return this.http.delete<Proyecto>(this.Url+"/borrar/"+proyecto.id);
}
}
