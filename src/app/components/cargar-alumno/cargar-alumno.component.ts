import { Component, OnInit } from '@angular/core';
import { Materia } from '../../models/materia';
import { Alumno } from '../../models/alumno';
import { AlumnoService } from '../../services/alumno.service';
 

@Component({
  selector: 'app-cargar-alumno',
  templateUrl: './cargar-alumno.component.html',
  styleUrls: ['./cargar-alumno.component.css']
})
export class CargarAlumnoComponent implements OnInit {
  public materia: Materia;
  public alumno: Alumno;
  public materias: Materia[]=[];
  

  constructor(
    private alumnoService: AlumnoService
  ) {
    this.materia= new Materia('',null, '', null);
    this.alumno= new Alumno(null,'',null,null,null);

   }

  ngOnInit(): void {
  }

  onSubmit(forms){
   this.alumnoService.guardarStorage(this.materia);
   forms.reset();

  }

  getMaterias(){
    this.materias= this.alumnoService.getMaterias();
    console.log(this.materias);
  }
  

}
