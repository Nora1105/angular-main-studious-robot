import { Component, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import * as tt from '@tomtom-international/web-sdk-maps';
@Component({
  selector: 'app-popup-map',
  templateUrl: './popup-map.component.html',
  styleUrl: './popup-map.component.css',
  providers: [ConfirmationService, MessageService]
})
export class PopupMapComponent {
  locationsecondMethod: any
  locationlatitude: any
  locationlongitude: any
  centery: any
  marker: any
  map: any
  disabled:boolean=false;
  visible: boolean = false;
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }
  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Please confirm to find Current Location',
      icon: 'pi pi-exclamation-circle',
      acceptIcon: 'pi pi-check mr-1',
      rejectIcon: 'pi pi-times mr-1',
      rejectButtonStyleClass: 'p-button-danger p-button-sm',
      acceptButtonStyleClass: 'p-button-outlined p-button-sm',
      accept: () => {
        this.visible = true;
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
        })
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Location Access Received', life: 3000 });
      },
      reject: () => {
        this.visible = false;
        this.disabled=true;
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Location Access rejected', life: 3000 });
      }
    });
  }
}