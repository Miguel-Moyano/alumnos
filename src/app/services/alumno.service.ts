import { Injectable } from '@angular/core';
import { Materia } from '../models/materia';
import { Alumno } from '../models/alumno';
 
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  public materias: Materia[]=[];
  constructor() { 
    this.cargarStorage();
  }

  guardarStorage(materia:Materia){
    console.log('Elemento recibido en servicio', materia);
    this.materias.push(materia);
    localStorage.setItem('materias', JSON.stringify(this.materias));
  }
  
  cargarStorage(){
    if(localStorage.getItem('materias')){
      this.materias= JSON.parse(localStorage.getItem('materias'));
      console.log(this.materias);

    }else{
      this.materias= [];
    }
  }
  getMaterias(){
    return this.materias;
  }



}
