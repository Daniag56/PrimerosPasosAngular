import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: 'counter-page.component.html',
  styles: `
      button {  //Dentro del propio componente podemos determinar los estilos de los botones por ejemplo
          padding: 5px;
          margin: 5px 10px;
          width: 75px;
      }
    `,
  //changeDetection: ChangeDetectionStrategy.OnPush, Con esta funcion eliminamos el Zoneless de Angular
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10); //Las señales son funciones de angular core, por defecto usan valores numericos

  constructor() {
    setInterval(() => {
      this.counter += 1,
      this.botonIncremento(1),
      console.log('Tick');
    },2000); //Con la funcion setInterval podemos incrementar un valor numerico en funcion de una medida de tiempo
            //en este caso incrementamos el contador cada 2 segundos,!Ojo, no es buena practica usar esta funcion en el constructor¡
  }
  botonIncremento(incrementador: number) {
    this.counter += incrementador;
    this.counterSignal.update((valorActual) => valorActual + incrementador); //Las señales tienen funciones propias, en este caso
    // queremos incrementar el valor de la señal y usamos
    // update con la sintaxis usada para ejecutar el incremento
  }

  botonReseteo() {
    this.counter = 0;
    this.counterSignal.update((valorActual => 0));
  }
}
//Primer componente creado por mi como prueba
