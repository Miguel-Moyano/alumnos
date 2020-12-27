import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Materia } from '../../models/materia';
 

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
public materias: Materia[]=[];
  constructor(
    private A_service: AlumnoService
  ) { 
    this.getMaterias();
  }

  ngOnInit(): void {
  }

  getMaterias(){
    this.materias= this.A_service.getMaterias();
    console.log('componente materia: ', this.materias);
  }

}
