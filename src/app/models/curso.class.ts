export class Curso{
    constructor(
        public id: number,
        public nombre: string,
        public fechaInicio:  string,
        public fechaFin: string,
        public estado: Disponible
    ){}
}
export enum Disponible{
    habilitado = "Disponible",
    deshabilitado = "Agotado"
}