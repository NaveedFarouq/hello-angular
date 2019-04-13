import { Component, OnInit } from '@angular/core';
import { CommmentService } from '../commment.service';

@Component({
  selector: 'app-comments-list2',
  templateUrl: './comments-list2.component.html',
  styleUrls: ['./comments-list2.component.css']
})
export class CommentsList2Component implements OnInit {

  private comments: Array<any>;
  constructor(
    private commentService: CommmentService
  ) { }

  ngOnInit() {
    this.comments = this.commentService.getComments();
  }
  // call this service from html then pass the value to teh service fro processing
  
  removeComment(comment) {
    this.comments = this.commentService.removeComments(comment);
  }

  showComment(comment) {
    this.commentService.showComment(comment);
  }

}
