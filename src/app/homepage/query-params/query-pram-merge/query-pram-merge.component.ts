import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query-pram-merge',
  templateUrl: './query-pram-merge.component.html',
  styleUrl: './query-pram-merge.component.css'
})
export class QueryPramMergeComponent {
  constructor(private route: Router) { }
  queryParamsMerge() {
    this.route.navigate(['/homepage/hello/query-params-merge'], 
    { 
      queryParams: { do: "merge" }, 
      queryParamsHandling: 'merge'
     });
  }

  queryParamsPreserve() {
    this.route.navigate(['/homepage/hello/query-params'], 
    { 
      queryParamsHandling: 'preserve'
     });
  }
  
  // queryParamsReturn(){
  //   this.route.navigate(['/homepage/hello/query-params']);
  // }
}
