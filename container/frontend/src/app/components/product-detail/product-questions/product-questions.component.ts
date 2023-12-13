import { Component, Input, OnInit } from '@angular/core';
import { Toast } from 'src/classes/toast.class';

@Component({
  selector: 'product-questions',
  templateUrl: './product-questions.component.html',
  styleUrls: ['./product-questions.component.css']
})
export class ProductQuestionsComponent implements OnInit {
  constructor(private toast: Toast) {}

  @Input() questionsData: any;

  questions: any;
  isQuestionModalVisible: boolean = false;

  ngOnInit() {
    this.questions = this.questionsData.questions
    console.log("SELLER: ", this.questionsData.seller);
    
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
