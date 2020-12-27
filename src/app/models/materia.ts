import { Alumno } from './alumno';
 
export class Materia{
    
    
    
    constructor(
        public nombre: string,
        public can_alumnos: number,
        public profesor: string,
        public alumnos: Alumno[]=[]

    ){
       


    }
}