import { Component, OnInit } from '@angular/core';
import { Quote} from '../quotes'; 

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
