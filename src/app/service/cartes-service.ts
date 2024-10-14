import { Injectable } from "@angular/core";
import { MaCarte } from "../model/cartes";

@Injectable({
    providedIn: 'root'
})
export class CarteService {
    private MyCard: MaCarte[] = [
        new MaCarte(
            'TEKAM KOTIEU',
            'DIMITRI RAOUL',
            '28/28/2003',
            'DOUALA-CAMEROUN',
            'MASCULIN',
            '1,82m',
            'DEVELOPPEUR APPLICATION',
            'img/zee1.png',
            '₯₤₧'
        ),

        new MaCarte(
            'MASSEMO KOTIEU',
            'TCHOUAGUEP CARELLE',
            '01/09/2001',
            'DOUALA CAMEROUN',
            'FEMININ',
            '1,72m',
            'DEVELOPPEUR APPLICATION',
            'img/zee2.png',
            '₯₤₧'
        ),

        new MaCarte(
            'CHIMI KOTIEU',
            'JOSPIN',
            '27/09/1999',
            'DOUALA CAMEROUN',
            'MASCULIN',
            '1,92m',
            'DEVELOPPEUR APPLICATION',
            'img/zee1.png',
            '₯₤₧'
        ),

        new MaCarte(
            'YANKAM KEZEBOU',
            'ARNO',
            '09/03/1993',
            'DOUALA CAMEROUN',
            'MASCULIN',
            '1,72m',
            'DEVELOPPEUR AZURE',
            'img/zee1.png',
            '₯₤₧'
        ),

        new MaCarte(
            'NTEPDIE',
            'ALAIN BRUNO',
            '01/04/1984',
            'DOUALA CAMEROUN',
            'MASCULIN',
            '1,62m',
            'PRODUCTEUR ANIMATION',
            'img/zee1.png',
            '₯₤₧'
        ),

        new MaCarte(
            'TCHEGANG YANKAM',
            'MADELEINE',
            '15/03/1969',
            'NGONKSAMBA',
            'FEMININ',
            '1,72m',
            'DIRECTRICE COMMERCIALE',
            'img/zee1.png',
            '₯₤₧'
        )
    ];
    getMaCarte(): MaCarte[]{
        return [...this.MyCard];
    }
}