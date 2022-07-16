import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from '../modelo/persona';

@Component({
  selector: 'app-edi',
  templateUrl: './edi.component.html',
  styleUrls: ['./edi.component.css']
})
export class EdiComponent implements OnInit {

  persona: Persona = new Persona(0, "", "", "", "", "");

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  obtener(e:any){
    this.persona.img=e[0].base64;
  }

  Cancel() {
    this.router.navigate(['cancelar'])
  }

  
  Editar() {
    let id = localStorage.getItem("id");
    this.service.getPersonaId(+id)
      .subscribe(data => {
        this.persona = data;
      })
  }

  Actualizar(persona: Persona) {
    this.service.updatePersona(persona)
      .subscribe(data => {
        this.persona = data;
        alert("Se Actualizo con Exito...!!!");
        this.router.navigate(['home']);
      })
  }
}