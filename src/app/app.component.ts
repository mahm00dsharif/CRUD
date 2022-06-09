import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductDetailsDialogComponent } from './Product/product-details-dialog/product-details-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRUD';

  constructor(private dialog:MatDialog){

  }

  openDialog() {
    this.dialog.open(ProductDetailsDialogComponent, {
      width: '30%',
    });
  }

}
