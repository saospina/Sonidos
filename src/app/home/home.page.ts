import { Component } from '@angular/core';
import { ANIMALES } from '../../data/data.animales';
import { Animal } from '../../interfaces/animal.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  animales: Animal[] = [];

  constructor () {
    this.animales = ANIMALES.slice(0);
  }
  reproducir(animal: Animal) {
    console.log(animal);
    let audio = new Audio();
    audio.src = animal.audio;
    animal.reproduciendo = true;
    audio.load();
    audio.play();
    setTimeout(()=> animal.reproduciendo = false, animal.duracion * 1000);
   }

}
