import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/Service/experiencia.service';
import { Experiencia } from '../modelo/experiencia';

@Component({
  selector: 'app-experiencia-add',
  templateUrl: './experiencia-add.component.html',
  styleUrls: ['./experiencia-add.component.css']
})
export class ExperienciaAddComponent implements OnInit {

  experiencia:Experiencia=new Experiencia(0,"","","");
  constructor(private router:Router, private service:ExperienciaService) { }

  ngOnInit() {
  }

  
  Cancel(){
    this.router.navigate(['home'])
  }

  Guardar(){
    this.service.createExperiencia(this.experiencia)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(['home']);
    })
  }
}
