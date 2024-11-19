import { Component, inject } from '@angular/core';
import { RecetasService } from '../services/recetas.service';
import { Recetas } from '../modelos/recetas';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-recetas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-recetas.component.html',
  styleUrl: './form-recetas.component.css'
})
export class FormRecetasComponent {

recetasSrv= inject(RecetasService);
receta: Recetas = {
  nombreReceta:'',
  ingredientesReceta: '',
  fotoReceta: '',
  pasosReceta:''
}
agregarReceta(){
  console.log(this.receta);
  this.recetasSrv.crearReceta(this.receta);

}
}
