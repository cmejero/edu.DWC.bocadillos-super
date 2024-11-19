import { Injectable } from '@angular/core';
import { Recetas } from '../modelos/recetas';
import { NgModel } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor() {

  }

  private recetas : Recetas[] = [];

  crearReceta(receta: Recetas){
    this.recetas.push(receta)
  }

  leerReceta() : Recetas[]{
    return this.recetas;
  }
}
