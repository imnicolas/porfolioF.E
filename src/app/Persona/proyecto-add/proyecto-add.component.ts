import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/Service/proyecto.service';
import { Proyecto } from '../modelo/proyecto';

@Component({
  selector: 'app-proyecto-add',
  templateUrl: './proyecto-add.component.html',
  styleUrls: ['./proyecto-add.component.css']
})
export class ProyectoAddComponent implements OnInit {

  proyecto:Proyecto=new Proyecto(0,"","","");
  constructor(private router:Router, private service:ProyectoService) { }

  ngOnInit() {
  }

  
  Cancel(){
    this.router.navigate(['cancelar'])
  }

  Guardar(){
    this.service.createProyecto(this.proyecto)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(['home']);
    })
  }
}
