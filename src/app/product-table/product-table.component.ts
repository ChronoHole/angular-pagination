import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'product-table',
  styleUrls: ['./product-table.component.scss'],
  templateUrl: './product-table.component.html',
})
export class ProductTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _productService: ProductService) {}
  displayedColumns: string[] = [
    'wbRating',
    'name',
    'brandName',
    'reviewsCount',
    'ordered',
    'orderedAmount',
    'soldQuantity',
    'soldAmount',
    'availability',
  ];
  dataSource: MatTableDataSource<Product>;

  ngOnInit(): void {
    this._productService.getProducts().subscribe((products) => {
      this.dataSource = new MatTableDataSource(products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
