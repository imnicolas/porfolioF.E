import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './Persona/add/add.component';
import { EdiComponent } from './Persona/edi/edi.component';
import { MainComponent } from './Persona/main/main.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactoService } from './Service/contacto.service';
import { ProyectoComponent } from './Persona/proyecto/proyecto.component';
import { ProyectoEdiComponent } from './Persona/proyecto-edi/proyecto-edi.component';
import { ProyectoAddComponent } from './Persona/proyecto-add/proyecto-add.component';
import { ProyectoService } from './Service/proyecto.service';
import { NadaComponent } from './Persona/nada/nada.component';
import { ExperienciaComponent } from './Persona/experiencia/experiencia.component';
import { ExperienciaAddComponent } from './Persona/experiencia-add/experiencia-add.component';
import { ExperienciaEdiComponent } from './Persona/experiencia-edi/experiencia-edi.component';
import { ExperienciaService } from './Service/experiencia.service';
import { SkillComponent } from './Persona/skill/skill.component';
import { SkillAddComponent } from './Persona/skill-add/skill-add.component';
import { SkillEdiComponent } from './Persona/skill-edi/skill-edi.component';
import { SkillService } from './Service/skill.service';
import { EstudioComponent } from './Persona/estudio/estudio.component';
import { EstudioAddComponent } from './Persona/estudio-add/estudio-add.component';
import { EstudioEdiComponent } from './Persona/estudio-edi/estudio-edi.component';
import { EstudioService } from './Service/estudio.service';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './Persona/menu/menu.component';
import { interceptorProvider } from './interceptors/persona-interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { EstudioDeleteComponent } from './Persona/estudio-delete/estudio-delete.component';
import { ExperienciaDeleteComponent } from './Persona/experiencia-delete/experiencia-delete.component';
import { ProyectoDeleteComponent } from './Persona/proyecto-delete/proyecto-delete.component';
import { SkillDeleteComponent } from './Persona/skill-delete/skill-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EdiComponent,
    MainComponent,
    ProyectoComponent,
    ProyectoEdiComponent,
    ProyectoAddComponent,
    NadaComponent,
    ExperienciaComponent,
    ExperienciaAddComponent,
    ExperienciaEdiComponent,
    SkillComponent,
    SkillAddComponent,
    SkillEdiComponent,
    EstudioComponent,
    EstudioAddComponent,
    EstudioEdiComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    EstudioDeleteComponent,
    ExperienciaDeleteComponent,
    ProyectoDeleteComponent,
    SkillDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AlifeFileToBase64Module,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    IvyCarouselModule
  ],
  providers: [ServiceService,ContactoService,ProyectoService,ExperienciaService,SkillService,EstudioService,interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
