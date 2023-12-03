import { UsuarioInterface } from "./usuario.interface";

export class Usuario implements UsuarioInterface {
    constructor(  
        public id: number,
        public nombre: string,
        public apellido: string,
        public correo: string,
        public edad?: number ,
        public password?: string,
        public token?: string){
    } 

    
}
