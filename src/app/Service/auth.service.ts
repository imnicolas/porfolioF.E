import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDTO } from '../Persona/modelo/jwt-DTO';
import { LoginUsuario } from '../Persona/modelo/login-usuario';
import { NuevoUsuario } from '../Persona/modelo/nuevo-usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //'http://localhost:8080/auth';
  //'https://suareznicolas.onrender.com/auth'
  authURL = environment.authUrl;

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'auth/nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO>{
    return this.httpClient.post<JwtDTO>(this.authURL + 'auth/login', loginUsuario);
  }
}
