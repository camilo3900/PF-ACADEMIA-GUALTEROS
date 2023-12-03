import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.class';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): unknown {
    const firstArg = args[0];
    const result = `${value.nombre} ${value.apellido}`;

    switch (firstArg) {
      case 'lowercase':
        return result.toLowerCase();
      case 'uppercase':
        return result.toUpperCase();

      default:
        return result;
  }

  }

}
