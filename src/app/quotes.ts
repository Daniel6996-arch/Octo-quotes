export class Quote {
     /** Word!: string;
     Author: string=" ";
     description: string=" ";  */
     showDescription: boolean;
    constructor(public Word: string,public Author : string,public Downvote : number,public Upvote : number,public completeDate: Date){
      this.showDescription=false;
    }
 }
