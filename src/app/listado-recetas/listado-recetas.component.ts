import { Component, inject } from '@angular/core';
import { RecetasService } from '../services/recetas.service';
import { Recetas } from '../modelos/recetas';

@Component({
  selector: 'app-listado-recetas',
  standalone: true,
  imports: [],
  templateUrl: './listado-recetas.component.html',
  styleUrl: './listado-recetas.component.css'
})
export class ListadoRecetasComponent {
recetaSrv = inject(RecetasService);

recetas : Recetas[]= [];

ngOnInit(){
  this.recetas = this.recetaSrv.leerReceta();
}
}
