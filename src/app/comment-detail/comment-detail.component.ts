import { Component, OnInit } from '@angular/core';
import { CommmentService } from '../commment.service';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

  comment: any = {
    author: '',
    content: ''
  };
  constructor(
    private commentService: CommmentService
  ) { }

  ngOnInit() {
    this.commentService.commentSelected$.subscribe(comment => {
      this.comment = comment;
    })
  }


}
