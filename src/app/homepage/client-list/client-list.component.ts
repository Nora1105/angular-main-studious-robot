import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { UserdataService } from './service/userdata.service';
import { DialogService } from 'primeng/dynamicdialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {
  loading: boolean = false;
  clear(table: Table) {
      table.clear();
  }
  products: any;
  users: any
  constructor(public usedata: UserdataService,public dialog: MatDialog) {
      usedata.userData().subscribe((datau) => {
          console.warn(datau);

          this.users = datau
          this.products = this.users.data;
      })
  }



openDialog(product: any): void {
  this.dialog.open(DialogComponent, {
    width: '400px',
    data: product,
  });
}

// selectAll(){

// }

selectedProducts!: any;
}