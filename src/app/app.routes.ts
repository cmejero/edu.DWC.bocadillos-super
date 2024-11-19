import { Routes } from '@angular/router';
import { FormRecetasComponent } from './form-recetas/form-recetas.component';
import { ListadoRecetasComponent } from './listado-recetas/listado-recetas.component';

export const routes: Routes = [
  {path: 'Nueva-receta', component: FormRecetasComponent},
  {path: 'Lista-recetas', component: ListadoRecetasComponent}
];
