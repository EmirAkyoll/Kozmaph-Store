import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private productService: ProductService) {}
  productId: any = '';
  productData: any = {};
  productRate: number = 0;

  productOverview: any;
  productInDepth: any;
  productQuestions: any;
  productComments: any;

  implementTheRateAverage(rate: number){
    console.log("rate: ", rate);

    if (rate % 1 >= 0.5) {
      // Round up if .50 or greater
      this.productRate = Math.ceil(rate);
    } else {
      // If less than .50, round down
      this.productRate = Math.floor(rate);
    }
  }

  async getProduct(){
    this.productId = this.route.snapshot.paramMap.get('id');
    
    await this.productService.getById(this.productId).subscribe((product_data: Product) => {
      this.productData = product_data
      console.log("data from params: ", this.productData);
      const { _id: product_id, description, features, image_urls, name: product_name, price, seller, summary, advantages, comments, questions } = this.productData;
      
      this.productOverview = {product_name, price, seller, image_urls, advantages, comments, questions, product_id};
      this.productInDepth = {summary, description, features};
      this.productQuestions = {questions, product_id, product_name, seller, image_urls};
      this.productComments = {comments, product_id};
  
      console.log("productOverview: ", this.productOverview, "productInDepth: ", this.productInDepth,
                  "productQuestions: ", this.productQuestions, "productComments: ", this.productComments);
    })

  }

  async ngOnInit() {
    await this.getProduct();
  }
}
