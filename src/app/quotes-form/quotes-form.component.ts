import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  toggleDetails(){
    this.quotes[index].showForm = !this.quotes[index].showForm;
   }

  constructor() { }

  ngOnInit(): void {
  }

}
