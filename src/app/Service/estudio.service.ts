import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudio } from '../Persona/modelo/estudio';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  constructor(private http:HttpClient) {}
    
  authURL = environment.authUrl;

  getEstudio(){
    return this.http.get<Estudio[]>(this.authURL+'estudios/traer');
}
createEstudio(estudio:Estudio){
  return this.http.post<Estudio>(this.authURL+'estudios/crear',estudio);
}
getEstudioId(id:number){
  return this.http.get<Estudio>(this.authURL+"estudios/"+id);
}
updateEstudio(estudio:Estudio){
  return this.http.put<Estudio>(this.authURL+"estudios/editar/"+estudio.id,estudio);
}
deleteEstudio(estudio:Estudio){
  return this.http.delete<Estudio>(this.authURL+"estudios/borrar/"+estudio.id);
}
}
