import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudioService } from 'src/app/Service/estudio.service';
import { TokenService } from 'src/app/Service/token.service';
import { Estudio } from '../modelo/estudio';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit {

  estudios: Estudio[] = [];
  roles : string[];
  isAdmin = false;

  constructor(private router: Router, private service: EstudioService, private tokenService : TokenService) { }
  ngOnInit(): void {
    this.service.getEstudio()
      .subscribe(data => {
        this.estudios = data;
      })
      this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  // Listar(){
  //   this.router.navigate(["listarP"]);
  // }
  Nuevo() {
    this.router.navigate(["addE"]);
  }

 Editar(estudio: Estudio): void {
    localStorage.setItem("id", estudio.id.toString());
    this.router.navigate(["editE"]);
  }

  Delete(estudio: Estudio) {
    this.service.deleteEstudio(estudio)
      .subscribe(data => {
        this.estudios = this.estudios.filter(p => p !== estudio);
        alert("Usuario eliminado...");
      })
  }

}
