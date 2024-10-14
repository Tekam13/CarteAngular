import { Component, OnInit } from '@angular/core';
import { CarteNationalComponent } from './carte-national/carte-national.component';
import { CardListComponent } from "./card-list/card-list.component";
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
