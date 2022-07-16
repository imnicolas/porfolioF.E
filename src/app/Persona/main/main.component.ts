import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { TokenService } from 'src/app/Service/token.service';
import { Persona } from '../modelo/persona';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  personas: Persona[] = [];
  roles: string[];
  isAdmin = false;




  constructor(private router: Router, private service: ServiceService, private tokenService: TokenService) { }
  ngOnInit(): void {
    this.service.getPersona()
      .subscribe(data => {
        this.personas = data;
      })
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
  
  Nuevo() {
    this.router.navigate(["add"]);
  }

  Editar(persona: Persona): void {
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(persona: Persona) {
    this.service.deletePersona(persona)
      .subscribe(data => {
        this.personas = this.personas.filter(p => p !== persona);
        alert("Usuario eliminado...");
      })
  }
}