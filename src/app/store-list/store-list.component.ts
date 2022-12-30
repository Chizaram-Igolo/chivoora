import { Component, OnInit } from '@angular/core';
import { store, stores } from '../data/stores';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css'],
})
export class StoreListComponent implements OnInit {
  constructor() {}

  title = 'chivoora';
  coords: number[] = [];

  lng: number = 0;
  lat: number = 0;

  nearestStores: store[] = [];
  otherStores: store[] = [];

  public ngOnInit(): void {
    if (navigator.geolocation) {
      this.getPosition()
        .then((pos) => {
          this.coords = [pos.lat, pos.lng];

          let storeDistances = stores
            .map((store, idx) => [
              this.getDistance(pos.lng, pos.lat, store.lng, store.lat),
              idx,
            ])
            .filter((d) => d[0] <= 100);

          this.nearestStores = storeDistances.map((item) => stores[item[1]]);

          // this.nearestStores = [];

          if (this.nearestStores.length === 0) {
            console.log('ddf');
            this.otherStores = stores;
          } else {
            this.otherStores = stores.filter(
              (item, idx) => storeDistances.findIndex((d) => d[1] === idx) < 0
            );
          }
        })
        .catch(() => {
          console.log('Message: Turn on Browser GeoLocation.');
        });
    }
  }

  changeLng = (lng: string) => {
    console.log(Number(lng));
    this.lng = Number(lng);
  };
  changeLat = (lat: string) => (this.lat = Number(lat));

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (resp) => {
          resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  getDistance(lng1: number, lat1: number, lng2: number, lat2: number) {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lng1 - lng2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    return dist * 1.609344;
  }

  getStores() {
    let storeDistances = stores
      .map((store, idx) => [
        this.getDistance(this.lng, this.lat, store.lng, store.lat),
        idx,
      ])
      .filter((d) => d[0] <= 100);

    console.log(storeDistances);

    this.nearestStores = storeDistances.map((item) => stores[item[1]]);

    // this.nearestStores = [];

    if (this.nearestStores.length === 0) {
      console.log('ddf');
      this.otherStores = stores;
    } else {
      this.otherStores = stores.filter(
        (item, idx) => storeDistances.findIndex((d) => d[1] === idx) < 0
      );
    }
  }
}
