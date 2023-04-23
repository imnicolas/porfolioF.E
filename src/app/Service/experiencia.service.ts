import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../Persona/modelo/experiencia';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  constructor(private http:HttpClient) {}
    
  authURL = environment.authUrl;

  getExperiencia(){
    return this.http.get<Experiencia[]>(this.authURL+'experiencias/traer');
}
createExperiencia(experiencia:Experiencia){
  return this.http.post<Experiencia>(this.authURL+'experiencias/crear',experiencia);
}
getExperienciaId(id:number){
  return this.http.get<Experiencia>(this.authURL+"experiencias/"+id);
}
updateExperiencia(experiencia:Experiencia){
  return this.http.put<Experiencia>(this.authURL+"experiencias/editar/"+experiencia.id,experiencia);
}
deleteExperiencia(experiencia:Experiencia){
  return this.http.delete<Experiencia>(this.authURL+"experiencias/borrar/"+experiencia.id);
}
}