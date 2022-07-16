import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/Service/skill.service';
import { Skill } from '../modelo/skill';

@Component({
  selector: 'app-skill-add',
  templateUrl: './skill-add.component.html',
  styleUrls: ['./skill-add.component.css']
})
export class SkillAddComponent implements OnInit {

  skill: Skill = new Skill(0, "", 0, "");
  constructor(private router: Router, private service: SkillService) { }

  ngOnInit() {
  }

  obtener(e: any) {
    this.skill.img = e[0].base64;
    console.log(e[0].base64);
  }

  Cancel() {
    this.router.navigate(['home'])
  }

  Guardar() {
    this.service.createSkill(this.skill).subscribe(data => { this.skill = data; })
    this.router.navigate(['home']);
  }
}

// alert("Se Agrego con Exito...!!!");