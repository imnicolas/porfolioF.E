import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../Persona/modelo/contacto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  constructor(private http:HttpClient) {}
    
  authURL = environment.authUrl;

  getContacto(){
    return this.http.get<Contacto[]>(this.authURL+'contactos/traer');
}
createContacto(contacto:Contacto){
  return this.http.post<Contacto>(this.authURL+'contactos/crear',contacto);
}
getContactoId(id:number){
  return this.http.get<Contacto>(this.authURL+"contactos/"+id);
}
updateContacto(contacto:Contacto){
  return this.http.put<Contacto>(this.authURL+"contactos/editar/"+contacto.id,contacto);
}
deleteContacto(contacto:Contacto){
  return this.http.delete<Contacto>(this.authURL+"contactos/borrar/"+contacto.id);
}
}