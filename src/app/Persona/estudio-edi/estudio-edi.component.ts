import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudioService } from 'src/app/Service/estudio.service';
import { Estudio } from '../modelo/estudio';

@Component({
  selector: 'app-estudio-edi',
  templateUrl: './estudio-edi.component.html',
  styleUrls: ['./estudio-edi.component.css']
})
export class EstudioEdiComponent implements OnInit {

  estudio :Estudio=new Estudio(0,"","","");
  
  constructor(private router:Router,private service:EstudioService) { }

  ngOnInit() {
    this.Editar();
  }

  Cancel(){
    this.router.navigate(['home'])
  }

  

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getEstudioId(+id)
    .subscribe(data=>{
      this.estudio=data;
      console.log(data);
    })
  }
  
  Actualizar(estudio:Estudio){
    this.service.updateEstudio(estudio)
    .subscribe(data=>{
      this.estudio=data;
      alert("Se actualizo con exito");
      this.router.navigate(['home']);
    })
  }
}
