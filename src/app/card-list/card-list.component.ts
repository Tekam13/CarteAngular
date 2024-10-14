import { CarteNationalComponent } from './../carte-national/carte-national.component';
import { Component, OnInit } from '@angular/core';
import { MaCarte } from '../model/cartes';
import { CarteService } from '../service/cartes-service';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CarteNationalComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit{
  
  constructor(private ServiceCarte: CarteService){}

  MyCard!: MaCarte[];

  ngOnInit(): void {

    this.MyCard = this.ServiceCarte.getMaCarte();
  }
}
