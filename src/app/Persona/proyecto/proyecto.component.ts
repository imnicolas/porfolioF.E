import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/Service/proyecto.service';
import { TokenService } from 'src/app/Service/token.service';
import { Proyecto } from '../modelo/proyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos: Proyecto[] = [];
  roles: string[];
  isAdmin = false;

  constructor(private router: Router, private service: ProyectoService, private tokenService: TokenService) { }
  ngOnInit(): void {
    this.service.getProyecto()
      .subscribe(data => {
        this.proyectos = data;
      })
      this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  Nuevo() {
    this.router.navigate(["addP"]);
  }

 Editar(proyecto: Proyecto): void {
    localStorage.setItem("id", proyecto.id.toString());
    this.router.navigate(["editP"]);
  }

  Delete(proyecto: Proyecto) {
    this.service.deleteProyecto(proyecto)
      .subscribe(data => {
        this.proyectos = this.proyectos.filter(p => p !== proyecto);
        alert("Usuario eliminado...");
      })
  }
}
