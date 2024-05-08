import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-param-tester',
  templateUrl: './query-param-tester.component.html',
  styleUrl: './query-param-tester.component.css'
})
export class QueryParamTesterComponent {
  order: any;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParamMap
      .subscribe((params) => {
        console.log(params);
        this.order = { ...params.keys, ...params };
        console.warn(this.order);
      })
  }
  // Testing new thing
  // order_key:any[]=[];
  // order_values:any[]=[]
  // ngOnInit(): void {
  //   this.route.queryParamMap
  //     .subscribe((params) => {
  //       console.log(params);
  //       this.order_key = { ...params.keys};
  //       // this.order_values={...params};
  //       console.warn(this.order_key);
  //     })
  // }
}