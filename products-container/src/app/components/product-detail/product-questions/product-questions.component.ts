import { Component } from '@angular/core';

@Component({
  selector: 'product-questions',
  templateUrl: './product-questions.component.html',
  styleUrls: ['./product-questions.component.css']
})
export class ProductQuestionsComponent {
  constructor() {}

  questions = [
    {
      question_content: "186 male, 75 kilos, what size should we have?",
      answer: "Hello, you can choose size M according to your measurements. We wish you pleasant shopping."
    },
    {
      question_content: "Are the t-shirts cotton? Isn't the white one pure white, not ecru?",
      answer: "Hello, yes sir, it is cotton, the white one is completely white."
    },
    {
      question_content: "What is different from Jett t-shirts?",
      answer: "Hello, there is a difference in pattern. Jett tshirt is an oversize pattern. Cultivated t-shirt is regular pattern. It is a bit narrow compared to the oversize pattern. We wish you pleasant shopping."
    },
    {
      question_content: "I wonder when size M will be in stock?",
      answer: "Hello, the stocks of our products are constantly checked and updated. The stock will be updated again very soon. If you wish, you can receive notifications when the product is added to stock by using the 'Notify Me When It Arrives' button on the product page. Thank you for choosing us. We wish you a nice day."
    },
    {
      question_content: "Hello, in the description of the product it says both cotton and polyester, I thought it would be best to ask you, what is it 100 percent?",
      answer: "Hello, it is 100% cotton. It is not polyester. We wish you pleasant shopping."
    },
  ]
}
