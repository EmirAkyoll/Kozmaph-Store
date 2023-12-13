import { Component, Input, OnInit } from '@angular/core';
import { Toast } from 'src/classes/toast.class';

@Component({
  selector: 'product-comments',
  templateUrl: './product-comments.component.html',
  styleUrls: ['./product-comments.component.css']
})
export class ProductCommentsComponent implements OnInit {
  constructor(private toast: Toast) {}

  @Input() commentsData: any;

  comments: any;
  comment_input: string = '';
  
  addToComments() {
    this.toast.show('Added to comments.', 'success')
  }

  ngOnInit() {
    this.comments = this.commentsData.comments
    console.log("length: ", this.commentsData.comments.length);
  }
}
