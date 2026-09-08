import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'hero', pathMatch: 'full' },
  {
    path: 'counter',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  { path: '**', redirectTo: 'hero' } /*Aqui hacemos una redireccion, por si introducimos una ruta invalida,
                                       podemos incluso redireccionar una funcion o componente*/
];
