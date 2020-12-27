import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargarAlumnoComponent } from './components/cargar-alumno/cargar-alumno.component';
import { MateriasComponent } from './components/materias/materias.component';
 

const routes: Routes = [
  {path: '', component: CargarAlumnoComponent },
  {path: 'cargar-alumno', component: CargarAlumnoComponent },
  {path: 'lista-materias', component:MateriasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
