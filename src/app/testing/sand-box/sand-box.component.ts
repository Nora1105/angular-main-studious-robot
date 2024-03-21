import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { UserdataService } from './service/userdata.service';

import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';



@Component({
  selector: 'app-sand-box',
  templateUrl: './sand-box.component.html',
  styleUrl: './sand-box.component.css'
})

  export class SandBoxComponent {
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
    this.dialog.open(DialogBoxComponent, {
      width: '400px',
      data: product,
    });
  }
}