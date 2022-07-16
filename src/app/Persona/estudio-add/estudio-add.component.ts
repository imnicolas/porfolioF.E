import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudioService } from 'src/app/Service/estudio.service';
import { Estudio } from '../modelo/estudio';

@Component({
  selector: 'app-estudio-add',
  templateUrl: './estudio-add.component.html',
  styleUrls: ['./estudio-add.component.css']
})
export class EstudioAddComponent implements OnInit {

  estudio:Estudio=new Estudio(0,"","","");
  constructor(private router:Router, private service:EstudioService) { }

  ngOnInit() {
  }

  
  Cancel(){
    this.router.navigate(['home'])
  }

  Guardar(){
    this.service.createEstudio(this.estudio)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(['home']);
    })
  }
}
