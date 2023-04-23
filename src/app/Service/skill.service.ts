import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../Persona/modelo/skill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  constructor(private http:HttpClient) {}
    
  authURL = environment.authUrl;

  getSkill(){
    return this.http.get<Skill[]>(this.authURL+'skills/traer');
}
createSkill(skill:Skill){
  return this.http.post<Skill>(this.authURL+'skills/crear',skill);
}
getSkillId(id:number){
  return this.http.get<Skill>(this.authURL+"skills/"+id);
}
updateSkill(skill:Skill){
  return this.http.put<Skill>(this.authURL+"skills/editar/"+skill.id,skill);
}
deleteSkill(skill:Skill){
  return this.http.delete<Skill>(this.authURL+"skills/borrar/"+skill.id);
}
}
