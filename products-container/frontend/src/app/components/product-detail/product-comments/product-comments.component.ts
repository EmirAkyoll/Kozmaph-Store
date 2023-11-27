import { Component } from '@angular/core';

@Component({
  selector: 'product-comments',
  templateUrl: './product-comments.component.html',
  styleUrls: ['./product-comments.component.css']
})
export class ProductCommentsComponent {
  constructor() {}

  comment_input: string = '';
  
  comments = [
    {
      comment_content: 'Looking at the comments, I ordered a full size but it was too big. I wear size M but it is too big, I will return it and order size S.',
      comment_rating: 4
    },
    {
      comment_content: '100% cotton, I bought one size larger, you can buy your exact size.',
      comment_rating: 5
    },
    {
      comment_content: 'The product is very good quality. The size was too big. I immediately bought a size smaller.',
      comment_rating: 4
    },
    {
      comment_content: 'The product is very good quality. The size was too big. I immediately bought a size smaller.',
      comment_rating: 4
    },
    {
      comment_content: 'The product is very good quality. The size was too big. I immediately bought a size smaller.',
      comment_rating: 4
    },
  ]
}