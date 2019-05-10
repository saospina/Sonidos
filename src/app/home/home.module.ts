import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ANIMALES } from '../../data/data.animales';
import { HomePage } from './home.page';
import { Animal } from '../../interfaces/animal.interface';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
@Component({
  selector: '',
  templateUrl: 'home.page.html'
})
export class HomePageModule {
  animales: Animal[] = [];
  constructor() {
    this.animales = ANIMALES.slice(0);
  }
}
