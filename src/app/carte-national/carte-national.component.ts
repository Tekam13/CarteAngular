import { Component, Input, OnInit } from '@angular/core';
import { MaCarte} from '../model/cartes';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-carte-national',
  standalone: true,
  imports: [NgClass],
  templateUrl: './carte-national.component.html',
  styleUrl: './carte-national.component.css'
})
export class CarteNationalComponent implements OnInit{

  @Input() Card !: MaCarte;

  
  User !: boolean;
  snap!: number;
  BtnText!: string;

  ngOnInit(): void {

    this.snap= 5;
    this.BtnText= 'Event'
    
  }
  Mouch(){
    // this.snap++;
    if(this.User){
      this.Event();
    }else{
      this.Suprise();
    }
  }
  Event(){
    this.User= false;
    this.BtnText='Event';
    this.snap--
  }
  Suprise(){
    this.User= true;
    this.BtnText='Suprise';
    this.snap++
  }

}
