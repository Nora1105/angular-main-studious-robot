import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query-params',
  templateUrl: './query-params.component.html',
  styleUrl: './query-params.component.css'
})
export class QueryParamsComponent {
  constructor(private route:Router){}
  queryParams(){
    this.route.navigate(['/homepage/hello/query-params'],{queryParams:{s:"test"}});
  }
}
