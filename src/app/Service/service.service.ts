import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Persona } from '../Persona/modelo/persona';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {}
    
  authURL = environment.authUrl;

    getPersona(){
      return this.http.get<Persona[]>(this.authURL+'personas/traer');
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.authURL+'personas/crear',persona);
  }
  getPersonaId(id:number){
    return this.http.get<Persona>(this.authURL+"personas/"+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.authURL+"personas/editar/"+persona.id,persona);
  }
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.authURL+"personas/borrar/"+persona.id);
  }
}