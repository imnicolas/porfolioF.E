import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/Service/proyecto.service';
import { Proyecto } from '../modelo/proyecto';

@Component({
  selector: 'app-proyecto-edi',
  templateUrl: './proyecto-edi.component.html',
  styleUrls: ['./proyecto-edi.component.css']
})
export class ProyectoEdiComponent implements OnInit {
  proyecto :Proyecto=new Proyecto(0,"","","");
  
  constructor(private router:Router,private service:ProyectoService) { }

  ngOnInit() {
    this.Editar();
  }

  Cancel(){
    this.router.navigate(['home'])
  }

  

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getProyectoId(+id)
    .subscribe(data=>{
      this.proyecto=data;
      console.log(data);
    })
  }
  
  Actualizar(proyecto:Proyecto){
    this.service.updateProyecto(proyecto)
    .subscribe(data=>{
      this.proyecto=data;
      alert ("El Proyecto se editó exitosamente")
      this.router.navigate(['home']);
    })
  }
}