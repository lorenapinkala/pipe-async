import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../models/alumnos';

@Pipe({
  name: 'nombre'
})
export class NombrePipe implements PipeTransform {

  transform(data: Alumno): unknown {
    let result: string = `${data.nombre} ${data.apellido}`;

    return result;
  }

}
