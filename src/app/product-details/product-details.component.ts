import { Component, Input} from '@angular/core';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService} from '../services/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent {

  detailProduct: Product;

  pgit = [];
  
  constructor(private productService: ProductService, private route: ActivatedRoute) 
  {
    this.route.params.subscribe(params => {
      this.loadDetail(params['id'])
    });
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });    
  }

  loadDetail(id: string): void {
    this.productService.getProductDetail(id).subscribe(result => {
      this.detailProduct = result;
    });
  }

  isTheLast(stockNumber: number): boolean {
    if (stockNumber === 1) {
      return true
    }
  }
  isAvailable(product: Product): boolean {
    return this.productService.isAvailable(product);
  }
  
}
