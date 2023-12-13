import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() productRateAverage = new EventEmitter<number>();

  comments: any;
  comment_text: string = '';
  rating: number = 0;
  rateAverage: number = 0;

  calculateAverageRate(comments: Comment[]){
    const rates: number[] = [];

    if (comments.length === 0) {
      this.rateAverage = 0;
    }
  
    for (let index = 0; index < comments.length; index++) {
      rates.push(comments[index].rating)
    }

    const sum = rates.reduce((acc: number, sayi: number) => acc + sayi, 0);
    this.rateAverage = sum / rates.length;  

    // send 'rateAverage' to parent(product-detail.component)
    this.productRateAverage.emit(this.rateAverage);
  }

  addComment(product_id: string, comment: Comment) {
    console.log("comment: ", comment);
    console.log("product_id: ", product_id);
    
    this.toast.show('Added to comments.', 'success')
    this.commentService.addNew(product_id, comment)
  }

  ngOnInit() {
    this.comments = this.commentsData.comments
    this.calculateAverageRate(this.comments)
    // console.log("length: ", this.commentsData.comments.length);
  }
}
