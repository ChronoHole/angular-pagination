import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

import { ProductTableComponent } from './product-table.component';

@NgModule({
  declarations: [ProductTableComponent],
  imports: [
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
  ],
  exports: [ProductTableComponent],
})
export class ProductTableModule {}
