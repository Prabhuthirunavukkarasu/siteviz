import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as L from 'leaflet';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  options: { layers: any; zoom: number; center: L.LatLng; };
  formOptions: FormGroup;
  latitude: number; longitude: number;
  zoom: number;
  layers: any

  private defaultIcon: L.Icon = L.icon({
    iconUrl: 'node_modules/leaflet/dist/images/marker-icon.png',
    shadowUrl: 'node_modules/leaflet/dist/images/marker-shadow.png',
    iconSize: [41, 51], // => random values you have to choose right ones for your case
    iconAnchor: [20, 51] // => random values too
  });

  constructor() {
    // initial map
    this.setOptions(46.879966, -121.726909);
  }

  ngOnInit() { }

  setOptions(latitude: number, longitude: number) {
    this.options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }),
        L.marker([latitude, longitude], { autoPan: true, draggable: true, title: "Marker", interactive: true, riseOnHover: true })
      ],
      zoom: 5,
      center: L.latLng(latitude, longitude),
    };
  }


  getCoordinatedLocation(latitude: number, longitude: number) {
    if (latitude && longitude) {
      this.setOptions(latitude, longitude);
    }
    else { alert("Please fill all the values."); }
  }

  onMapReady(map: any) {
    L.marker([map.latlng.lat, map.latlng.lng], { autoPan: true, draggable: true, title: "Marker", interactive: true, riseOnHover: true }).bindPopup("Lat : " + map.latlng.lat + " - Lon : " + map.latlng.lng)
  }

  changeZoom(zoom: number) {
    this.zoom = zoom;
  }

}
