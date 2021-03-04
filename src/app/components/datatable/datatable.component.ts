import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/models/Product';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {
  public dtOptions: DataTables.Settings = {};
  public products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.productService.getAllProducts(dataTablesParameters).subscribe(
          (product) => {
            this.products.push(product);
          },
          (err) => console.error(err),
          () =>
            callback({
              recordsTotal: this.products.length,
              recordsFiltered: this.products.length,
              data: [],
            })
        );
      },
      columns: [{ data: 'id' }, { data: 'name' }, { data: 'created_at' }],
    };
  }
}
