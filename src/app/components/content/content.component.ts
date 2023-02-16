import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/models/alumnos';
import { AlumnoService } from 'src/app/services/alumno.service';
import { EditarAlumnoDialogComponent } from '../editar-alumno-dialog/editar-alumno-dialog.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {


  alumnos!: Alumno[];
  dataSource!: MatTableDataSource<Alumno>;
  columnas: string[] = ['nombre', 'comision', 'materia', 'acciones'];
  suscripcion!: Subscription;
  constructor(
    private alumnoService: AlumnoService,
    private dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    // this.alumnos=this.alumnoService.obtenerAlumno(); esto cambia por la promesa colocada en el servicio

    this.dataSource = new MatTableDataSource<Alumno>();
    this.suscripcion = this.alumnoService.obtenerAlumnosObservable().subscribe((alumnos: Alumno[]) => {

      this.dataSource.data = alumnos;
      
    })


  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }



  agregar() {
    let a: Alumno = {
      nombre: 'Angel',
      apellido: 'Bravo',
      comision: '5544',
      materia: 'Ciencias'
    }
    this.alumnoService.agregarAlumno(a);
    console.log('agrego estudiante')
  }

  modificar(element: Alumno) {
    const dialogRef = this.dialog.open(EditarAlumnoDialogComponent, {
      data: element
    });

  }

  eliminar() {
    console.log('elimino estudiante')
  }
}
