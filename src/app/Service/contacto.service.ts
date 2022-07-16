import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../Persona/modelo/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  constructor(private http:HttpClient) {}
    
  Url='http://localhost:8080/contactos';
  URL='https://porfolioargentino.herokuapp.com/contactos';

  getContacto(){
    return this.http.get<Contacto[]>(this.Url+'/traer');
}
createContacto(contacto:Contacto){
  return this.http.post<Contacto>(this.Url+'/crear',contacto);
}
getContactoId(id:number){
  return this.http.get<Contacto>(this.Url+"/"+id);
}
updateContacto(contacto:Contacto){
  return this.http.put<Contacto>(this.Url+"/editar/"+contacto.id,contacto);
}
deleteContacto(contacto:Contacto){
  return this.http.delete<Contacto>(this.Url+"/borrar/"+contacto.id);
}
}