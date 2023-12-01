export class Curso{
    constructor(
        public id: number,
        public nombre: string,
        public fechaInicio: Date,
        public fechaFin: Date,
        public estado: Disponible
    ){}
}
export enum Disponible{
    habilitado = "Disponible",
    deshabilitado = "Agotado"
}