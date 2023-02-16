import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Alumno } from 'src/app/models/alumnos';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component implements OnInit, OnDestroy{

  alumnos!: Alumno[];
  alumnos$!: Observable<Alumno[]>;

  constructor(
    private alumnoService: AlumnoService
  ){}

  
  ngOnDestroy(): void {
    console.log('se destruye componente')
  }

  ngOnInit(){
    this.alumnos$ = this.alumnoService.obtenerAlumnosObservable();
  }



}