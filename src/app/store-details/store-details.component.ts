import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { store, stores } from '../data/stores';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css'],
})
export class StoreDetailsComponent implements OnInit {
  store: store = {};

  constructor(private route: ActivatedRoute) {}

  // store: store = {};

  ngOnInit(): void {
    // First get the store id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const storeIdFromRoute = Number(routeParams.get('storeId'));

    // Find the store that correspond with the id provided in route.
    let _store = stores.find((store) => store.id === storeIdFromRoute);

    this.store = _store ? _store : {};
  }

  // @ts-ignore
  isEmptyObject(obj) {
    return obj && Object.keys(obj).length === 0;
  }
}
