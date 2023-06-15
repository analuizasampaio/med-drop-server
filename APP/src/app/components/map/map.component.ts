import { Component, OnInit } from '@angular/core';

declare const L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  implements OnInit {
  title = 'location-app';

  ngOnInit() {
    if(!navigator.geolocation){
       console.log('localização não pode ser encontrada');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude,coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let map = L.map('map').setView(latLong, 13);
      
      L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png', 
        {
         maxZoom: 19,
         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        let marker = L.marker(latLong).addTo(map);

        marker.bindPopup('<b> Estou aqui</b>').openPopup
    });
    this.watchPosition();
 }

 watchPosition(){
  let desLat = 0;
  let desLon = 0;
  let id = navigator.geolocation.watchPosition((position) => {
    console.log (
      `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
    );
    if(position.coords.latitude === desLat) {
      navigator.geolocation.clearWatch(id);
    }
  }, (err) => {
    console.log(err);
  }, {
     enableHighAccuracy: true,
     timeout: 5000,
     maximumAge: 0
  });
 }

}


