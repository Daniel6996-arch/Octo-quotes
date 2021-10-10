import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';


@Component({
  selector: 'app-quotes-text',
  templateUrl: './quotes-text.component.html',
  styleUrls: ['./quotes-text.component.css']
})
export class QuotesTextComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('With blood comes knowledge','Arminius Octo',0,0,new Date(2021,9,8)),
    new Quote('In all thy ways acknowledge the Lord, and He shall direct thy paths.','King Solomon',0,0,new Date(2021,9,10)),
    new Quote('Forsake her not and she will preserve thee, love her and she will keep thee.','Love tunes',0,0,new Date(2021,9,9)),
    new Quote('Leave it to the Lord.','Nyutu Daniel',0,0,new Date(2021,9,10)),
    new Quote('Everything is connected in this universe','Socrates',0,0,new Date(2021,9,8)),
    new Quote('Do not gain the world and loose your soul, wisdom is better than gold.','Bob Marley',0,0,new Date(2021,9,9))
  ];
  toggleDetails(index: any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
   }
  constructor() { }

  ngOnInit(): void {
  }

}
