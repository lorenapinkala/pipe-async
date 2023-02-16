import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumnos';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-content3',
  templateUrl: './content3.component.html',
  styleUrls: ['./content3.component.css']
})
export class Content3Component implements OnInit, OnDestroy{
  alumnos!: Alumno[];
  

  constructor(
    private alumnoService: AlumnoService
  ){}


  ngOnDestroy(): void {
    console.log('se destruye componente')
  }

  ngOnInit(){
    this.alumnoService.obtenerAlumnoPromise().then((alumnos:Alumno[])=>{
      this.alumnos=alumnos;
    }).catch((error:any)=>{
      console.log('Hubo un error en el Promise',error);
    })


  }


}