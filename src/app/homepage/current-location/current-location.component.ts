import { Component } from '@angular/core';
// import { LocationService } from './location/location.service';

@Component({
  selector: 'app-current-location',
  templateUrl: './current-location.component.html',
  styleUrl: './current-location.component.css'
})
export class CurrentLocationComponent {

  locationsecondMethod:any
  locationlatitude:any
  locationlongitude:any


  // constructor(private locser:LocationService){
    constructor(){

    // const position = this.locser.getCurrentLocation();
    // console.log(position);



// my method
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position.coords)
      this.locationsecondMethod=position.coords
      this.locationlatitude=this.locationsecondMethod.latitude
      this.locationlongitude=this.locationsecondMethod.longitude
      console.log(this.locationlatitude);
      console.log(this.locationlongitude);   
    })
  }
}