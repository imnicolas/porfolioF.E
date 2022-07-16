import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/Service/experiencia.service';
import { Experiencia } from '../modelo/experiencia';

@Component({
  selector: 'app-experiencia-edi',
  templateUrl: './experiencia-edi.component.html',
  styleUrls: ['./experiencia-edi.component.css']
})
export class ExperienciaEdiComponent implements OnInit {

  experiencia :Experiencia=new Experiencia(0,"","","");
  
  constructor(private router:Router,private service:ExperienciaService) { }

  ngOnInit() {
    this.Editar();
  }

  Cancel(){
    this.router.navigate(['home'])
  }

  

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getExperienciaId(+id)
    .subscribe(data=>{
      this.experiencia=data;
      console.log(data);
    })
  }
  
  Actualizar(experiencia:Experiencia){
    this.service.updateExperiencia(experiencia)
    .subscribe(data=>{
      this.experiencia=data;
      this.router.navigate(['home']);
    })
  }

}
