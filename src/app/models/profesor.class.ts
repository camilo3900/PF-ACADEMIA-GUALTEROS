import { UsuarioInterface } from "./usuario.interface";

export class Profesor implements UsuarioInterface {
    constructor(
        public id: number,
        public nombre: string,
        public apellido: string,
        public correo: string,
        public edad?: number | undefined,
    ){
    
        
    }

    
}