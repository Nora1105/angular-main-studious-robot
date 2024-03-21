import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { ServiceService } from './service/service.service';
import { DialogService } from 'primeng/dynamicdialog';
import { MatDialog } from '@angular/material/dialog';
import { Dialogbox2Component } from './dialogbox2/dialogbox2.component';

@Component({
  selector: 'app-sandbox2',
  templateUrl: './sandbox2.component.html',
  styleUrl: './sandbox2.component.css'
})
export class Sandbox2Component {
  loading: boolean = false;
  clear(table: Table) {
      table.clear();
  }
  products: any;
  users: any
  constructor(public usedata: ServiceService,public dialog: MatDialog) {
      usedata.userData().subscribe((datau) => {
          console.warn(datau);

          this.users = datau
          this.products = this.users.data;
      })
  }



openDialog(product: any): void {
  this.dialog.open(Dialogbox2Component, {
    width: '400px',
    data: product,
  });
}
}