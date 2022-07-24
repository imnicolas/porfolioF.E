import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from '../modelo/persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  persona: Persona = new Persona(0, "", "", "", "", "");
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }

  obtener(e:any){
    this.persona.img=e[0].base64;
  }

  Guardar() {
    this.service.createPersona(this.persona)
      .subscribe(data => {
        this.persona=data;
        // alert("Se Agrego con Exito...!!!");
        // window.location.reload();
        this.router.navigate(["home"]);
      })
  }
}