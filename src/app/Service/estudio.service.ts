import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudio } from '../Persona/modelo/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  constructor(private http:HttpClient) {}
    
  URL='http://localhost:8080/estudios';
  Url='https://porfolioargentino.herokuapp.com/estudios';

  getEstudio(){
    return this.http.get<Estudio[]>(this.Url+'/traer');
}
createEstudio(estudio:Estudio){
  return this.http.post<Estudio>(this.Url+'/crear',estudio);
}
getEstudioId(id:number){
  return this.http.get<Estudio>(this.Url+"/"+id);
}
updateEstudio(estudio:Estudio){
  return this.http.put<Estudio>(this.Url+"/editar/"+estudio.id,estudio);
}
deleteEstudio(estudio:Estudio){
  return this.http.delete<Estudio>(this.Url+"/borrar/"+estudio.id);
}
}
