import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommmentService {
  private commentSelectedSource = new Subject<any>();
  public commentSelected$ = this.commentSelectedSource.asObservable();
  
  private comments: Array<any> = [
    {
      author: 'solomon',
      content: `TypeScript + Angular is amazing`
    },
    {
      author: 'lorna',
      content: `TypeScript is really awesome`
    },
    {
      author: 'codebeast',
      content: `I'm new to TypeScript`
    }
  ];

  constructor() { }

  getComments() {
    return this.comments;
  }
  removeComments(removableComment) {
    // find the index of the comment
    debugger
    const index = this.comments.findIndex(
      comment => comment.author === removableComment.author
    );
    // remove the comment from the array
    this.comments.splice(index, 1);
    // return the new array
    return this.comments;
  }

  showComment(comment) {
    this.commentSelectedSource.next(comment);
  }
  
}
