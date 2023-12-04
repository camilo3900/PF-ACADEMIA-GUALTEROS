import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { PATTERN } from 'src/app/models/patterns/patterns';

@Pipe({
  name: 'formErrors'
})
export class FormErrorsPipe implements PipeTransform {/* Pipe para mostrar mat-erros de formularios */

  transform(value: ValidationErrors| null | undefined, ...args: unknown[]): unknown {
    const mensajesError: Array<string> = []


      
    if(!value) return "";
    if(value){
      if('required' in value){
        mensajesError.push("Este campo es requerido")
      }
      if('email' in value){
        mensajesError.push("No corresponde a un email")
      }
      if('pattern' in value && value['pattern'].requiredPattern == (PATTERN.password)){
        mensajesError.push("La password es Invalida")
      }
      if('pattern' in value && value['pattern'].requiredPattern === PATTERN.tel.source){
        mensajesError.push("No corresponde a un telefono")
      }
      if('minlength' in value){
        mensajesError.push(`Se necesitan minimo ${value['minlength'].requiredLength} caracteres`)
      }
      if('maxlength' in value){
        mensajesError.push(`Se necesitan maximo ${value['maxlength'].requiredLength} caracteres`)
      }

    }
    return mensajesError.join('. ')
  }

}
