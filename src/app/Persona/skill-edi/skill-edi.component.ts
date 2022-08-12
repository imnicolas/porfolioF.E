import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/Service/skill.service';
import { Skill } from '../modelo/skill';

@Component({
  selector: 'app-skill-edi',
  templateUrl: './skill-edi.component.html',
  styleUrls: ['./skill-edi.component.css']
})
export class SkillEdiComponent implements OnInit {

  skill: Skill = new Skill(0, "", 0, "","");

  constructor(private router: Router, private service: SkillService) { }

  ngOnInit() {
    this.Editar();
  }

  Cancel() {
    this.router.navigate(['home'])
  }

  obtener(e: any) {
    this.skill.img = e[0].base64;
  }

  Editar() {
    let id = localStorage.getItem("id");
    this.service.getSkillId(+id)
      .subscribe(data => {
        this.skill = data;
      })
  }

  Actualizar(skill: Skill) {
    this.service.updateSkill(skill)
      .subscribe(data => {
        this.skill = data;
        this.router.navigate(['home']);
      })
  }


  // skill: Skill = new Skill(0, "", "", "");

  // constructor(private service: SkillService, private router: Router) {
  //   let id = localStorage.getItem("id");
  //   this.service.getSkillId(+id!).subscribe(data => { this.skill = data, console.log(data) });
  // }



  // ngOnInit(): void {

  // }

  // obtener(e: any) {
  //   this.skill.img = e[0].base64;
  // }

  // actualizar(c: Skill) {
  //   this.service.updateSkill(c).subscribe(data => { this.skill = data })
  //   {
  //   }
  // }

}
