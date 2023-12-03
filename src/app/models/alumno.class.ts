export class Alumno{
    constructor(
        public id: number,
        public nombre: string,
        public apellido: string,
        public correo: string,
        public curso?: string,
        public edad?: number
    ){}
}