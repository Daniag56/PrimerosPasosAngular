import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component'; //Siempre importar el nuevo componente en el approutes

export const routes: Routes = [

  {
    path: '',
    component:  CounterPageComponent,
  }
];


//Definicion de rutas de los componentes que creemos
