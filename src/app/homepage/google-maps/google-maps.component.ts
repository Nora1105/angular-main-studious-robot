import { Component } from '@angular/core';
import * as tt from '@tomtom-international/web-sdk-maps'

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrl: './google-maps.component.css'
})
export class GoogleMapsComponent {
  locationsecondMethod: any
  locationlatitude: any
  locationlongitude: any
  centery: any
  marker: any
  //current location
  constructor() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords)
      this.locationsecondMethod = position.coords
      this.locationlatitude = this.locationsecondMethod.latitude
      this.locationlongitude = this.locationsecondMethod.longitude
      this.centery = [this.locationlongitude, this.locationlatitude]
      this.map = tt.map({
        key: 'sJvqgjHlbbzuS1hy5fGP44PCZ2wlNzXX',
        container: 'map',
        zoom: 18,
        center: this.centery,
      });
      // this.map.addControl(new tt.NavigationControl({
      //   showZoom: true,
      //   showCompass: true,
      //   showExtendedRotationControls: true
      // }))
      // this.marker = new tt.Marker({
      //   draggable: true,
      //   color: 'red',
      // }).setLngLat(this.centery).addTo(this.map);
      // this.marker.setPopup().togglePopup();
    })
  }
  map: any
}