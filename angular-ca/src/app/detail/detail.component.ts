import { Component, OnInit, NgZone } from '@angular/core';
import { SwServiceService, RelatedItem } from '../services/sw-service.service';
import { ActivatedRoute } from '@angular/router';
import { observe } from 'rxjs-observe';
import * as Consts from '../constants';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  details: any = {};
  relatedItems: RelatedItem[] = [];

  constructor(private swapi: SwServiceService, private route: ActivatedRoute, private ngZone: NgZone) { }

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('type');
    const id = this.route.snapshot.paramMap.get('id');

    this.getItemDetails(category, id);
  }

  getItemDetails(category: string, id: string) {
    this.swapi.getData(`${category}/${id}`)
      .then(resp => {
        this.details = resp;
        let people = resp.characters || resp.residents || resp.people;
        people.forEach(url => {
          this.pushRelatedItem(url.replace(Consts.ROOT_URL, ''));
        });
      });
  }

  pushRelatedItem(url: string): void {
    this.swapi.getData(url)
      .then(resp => {
        this.relatedItems.push({
          itemName: resp.name || resp.title
        });
      });
  }
}
