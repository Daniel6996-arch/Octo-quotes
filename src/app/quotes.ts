export class Quote {
     /** Word!: string;
     Author: string=" ";
     description: string=" ";  */
     showDescription: boolean;
    constructor(public Word: string,public Author : string,public description: any){
      this.showDescription=false;
    }
 }
 let description = {
    upvotes: 0,
    downvotes: 0,
    time: Date(),
    upvote: upvote(),
    downvote: downvote(),

}
function upvote(){
    alert("hello")
}
function downvote(){
    alert("hello")
}