import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes-text',
  templateUrl: './quotes-text.component.html',
  styleUrls: ['./quotes-text.component.css']
})
export class QuotesTextComponent implements OnInit {
  quotes: Quote[] = [
    {Word:'With blood comes knowledge',Author:'Arminius Octo',description:'Find an online version and watch merlin find his son'},
    {Word:'In all thy ways acknowledge the Lord, and He shall direct thy paths.',Author:'King Solomon',description:'I have to buy cookies for the parrot'},
    {Word:'Forsake her not and she will preserve thee, love her and she will keep thee.',Author:'Love tunes',description:'Diana has her birthday coming up soon'},
    {Word:'Leave it to the Lord.',Author:'Nyutu Daniel',description:'Pupper likes expensive sancks'},
    {Word:'Everything is connected in this universe',Author:'Socrates',description:'Damn Math'},
    {Word:'Do not gain the world and loose your soul, wisdom is better than gold.',Author:'Bob Marley',description:'Cause I am an evil overlord'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
