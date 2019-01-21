import { Component, OnInit, NgZone } from '@angular/core';
import { SwServiceService } from '../services/sw-service.service';
import { ROOT_URL } from '../constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  categories = new Map;

  constructor(private swapi: SwServiceService, private route: ActivatedRoute, private ngZone: NgZone) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.swapi.getData('')
      .then(resp => {
        Object.keys(resp).forEach(key => {
          this.categories.set(key.replace('people', 'characters'), resp[key].replace(ROOT_URL, ''))
        })
      });
  }
}
