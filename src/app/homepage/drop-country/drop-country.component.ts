import { Component } from '@angular/core';
import { ServiceService } from './country/service.service';
import * as tt from '@tomtom-international/web-sdk-maps'
@Component({
  selector: 'app-drop-country',
  templateUrl: './drop-country.component.html',
  styleUrl: './drop-country.component.css'
})
export class DropCountryComponent {
  countries: any
  selectedCountry: any
  citycoord: any
  countrycoord: any
  statecoord: any
  selectedState: any
  coord: any
  selectedCity: any;
  constructor(private countryData: ServiceService) {
    countryData.country().subscribe((datac) => {
      console.warn(datac);
      this.countries = datac;
    })
  }
  map: any
  centery: any
  reset(){
    // debugger;
    const mapImg = document.getElementById("map");
    // mapImg?.hidden;
  }
  getLocation(): boolean {
    // debugger;
    this.countrycoord = [this.selectedCountry.longitude, this.selectedCountry.latitude]
    this.statecoord = [this.selectedState.longitude, this.selectedState.latitude]
    this.citycoord = [this.selectedCity.longitude, this.selectedCity.latitude]
    if (this.citycoord == null) {
      this.coord = [this.selectedState.longitude, this.selectedState.latitude]
    }
    else if (this.statecoord == null) {
      this.coord = [this.selectedCountry.longitude, this.selectedCountry.latitude]
    } else {
      this.coord = [this.selectedCity.longitude, this.selectedCity.latitude]
    }
    this.centery = this.coord
    console.warn('country coordinates : ', this.countrycoord);
    console.warn('state coordinates : ', this.statecoord);
    console.warn('city coordinates : ', this.citycoord);
    console.warn('coordinates : ', this.coord);
    this.map = tt.map({
      key: 'sJvqgjHlbbzuS1hy5fGP44PCZ2wlNzXX',
      container: 'map',
      zoom: 10,
      center: this.centery,
    })
    return false
  }
}