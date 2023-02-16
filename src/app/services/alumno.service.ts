import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumnos';
import {BehaviorSubject, map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private alumnos: Alumno[] = [
    {nombre: 'Juana', apellido:'Garcia', comision: '3434', materia: 'Matematicas'},
    {nombre: 'Pamela', apellido:'Sosa', comision: '5454', materia: 'Ciencias'},
    {nombre: 'Anacleto', apellido:'Ramallo', comision: '7676', materia: 'Gramatica'},
    {nombre: 'Filomena', apellido:'Rivas', comision: '9898', materia: 'Historia'},
  ];
  
  private alumnos$!:BehaviorSubject<Alumno[]>;

  constructor() {

    this.alumnos$ = new BehaviorSubject(this.alumnos);

    of(this.alumnos).pipe(
      map((alumnos:Alumno[])=>{
        return alumnos.filter((alumno:Alumno)=>alumno.materia==='Ciencias')
      })
    ).subscribe((alumnos)=>{
      console.log('filtro con el map',alumnos)
    })

   }

  obtenerAlumnoPromise (): Promise<Alumno[]>{
    return new Promise((resolve,reject)=>{
      if(this.alumnos.length>0){
        resolve (this.alumnos);
      }else{
        reject({
          codigo:232,
          descripcion:'el arreglo se encuentra vacio'
      });
      }
    });
  }

  obtenerAlumnosObservable (): Observable<Alumno[]>{
    return this.alumnos$.asObservable();

  }

  agregarAlumno(alumno:Alumno){
    this.alumnos.push(alumno);
    this.alumnos$.next(this.alumnos);
    console.log('alumno agregado',this.alumnos)
  }
}