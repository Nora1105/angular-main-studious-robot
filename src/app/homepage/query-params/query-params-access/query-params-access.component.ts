import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-params-access',
  templateUrl: './query-params-access.component.html',
  styleUrl: './query-params-access.component.css'
})
export class QueryParamsAccessComponent implements OnInit{
order:any;
constructor(private route:ActivatedRoute){}
ngOnInit(): void {
  this.route.queryParamMap
  .subscribe((params)=>{
    console.log(params);
    this.order={...params.keys,...params};
    console.warn(this.order);
  })
}
}