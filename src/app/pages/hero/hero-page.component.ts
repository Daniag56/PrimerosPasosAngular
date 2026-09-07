/*Para usar señales siempre debemos importarlas*/
import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  selector: 'app-hero-page',
  standalone: true,
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe]
})
export class HeroPageComponent {

  name = signal('IronMan');
  age = signal(45);

  heroDescription = computed(() => {   //Las señales computadas son de angular core, necesitan ser importadas
    const description = `${ this.name()} - ${this.age()}`;
    return description;
  })

  capitalizedName = computed(() => this.name().toUpperCase());

  getHeroDescription(){
    return `${'hero: '+this.name()} - ${'age: '+this.age()}`;
  }

  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge(){
    this.age.set(60);
  }

  resetForm(){
    this.name.set('IronMan');
    this.age.set(45);
  }
}
