import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(private product: ProductService) {}

  ngOnInit(): void {
    // this.product.getAllProducts().subscribe((e) => console.log(e));
  }
}
