import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { Toast } from 'src/classes/toast.class';
import { Comment } from 'src/interfaces/product.interface';

@Component({
  selector: 'product-comments',
  templateUrl: './product-comments.component.html',
  styleUrls: ['./product-comments.component.css']
})
export class ProductCommentsComponent implements OnInit {
  constructor(private toast: Toast, private commentService: CommentService) {}

  @Input() commentsData: any;

  comments: any;
  comment_text: string = '';
  rating: number = 0;
  
  addComment(product_id: string, comment: Comment) {
    console.log("comment: ", comment);
    console.log("product_id: ", product_id);
    
    this.toast.show('Added to comments.', 'success')
    this.commentService.addNew(product_id, comment)
  }

  ngOnInit() {
    this.comments = this.commentsData.comments
    // console.log("length: ", this.commentsData.comments.length);
  }
}
