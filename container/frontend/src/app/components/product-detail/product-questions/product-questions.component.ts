import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Toast } from 'src/classes/toast.class';
import { Question } from 'src/interfaces/product.interface';

@Component({
  selector: 'product-questions',
  templateUrl: './product-questions.component.html',
  styleUrls: ['./product-questions.component.css']
})
export class ProductQuestionsComponent implements OnInit {
  constructor(private toast: Toast, private questionService: QuestionService) {}

  @Input() questionsData: any;

  isQuestionModalVisible: boolean = false;
  questions: any;
  question_text: string = '';
  answer: string = '';

  ngOnInit() {
    this.questions = this.questionsData.questions
    // console.log("SELLER: ", this.questionsData.seller);
  }
  
  addQuestionOrAnswer(product_id: string, question: Question){
    console.log("questionText: ", this.question_text);
    console.log("answer: ", this.answer);
    
    this.toast.show('Question is sended.', 'success');
    this.closeModal();
    this.questionService.addNewQuestionOrAnswer(product_id, question)
  }

  showToast() {
    this.toast.show('Question is sended.', 'success')
  }

  showModal() {
    this.isQuestionModalVisible = true;
  }

  closeModal(){
    this.isQuestionModalVisible = false;
  }
}
