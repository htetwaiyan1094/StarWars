import { Component, OnInit, NgZone } from '@angular/core';
import { SwServiceService, RelatedItem } from '../services/sw-service.service';
import { ActivatedRoute } from '@angular/router';
import * as Consts from '../constants';
import { modelMap } from '../models/sw-models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  details: any = {};
  infoMap = new Map;
  relatedItems = new Map;
  imageUrl: string = '';
  title: string = '';

  constructor(private swapi: SwServiceService, private route: ActivatedRoute, private ngZone: NgZone) { }

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('type');
    const id = this.route.snapshot.paramMap.get('id');
    this.getItemDetails(category, id)
      .then(data => {
        this.relatedItems = data;
      });
  }

  getItemDetails(category: string, id: string): Promise<Map<string, string>> {
    const propNames = [
      'characters', 'residents', 'people', 'pilots',
      'films', 'planets', 'species', 'starships', 'vehicles'
    ];

    return this.swapi.getData(`${category}/${id}`)
      .then(resp => {
        let result = new Map;

        this.details = resp;
        this.title = resp.name || resp.title;

        let tempImgUrl = resp.url
          .replace(Consts.ROOT_URL, Consts.IMAGE_URL)
          .replace('people', 'characters');
        this.imageUrl = `${ tempImgUrl.substring(0, (tempImgUrl.length -1)) }.jpg`;

        modelMap.get(category)
        .forEach(prop =>
          this.infoMap.set(
            prop.replace('_', ' '),
            resp[prop]
          )
        );

        propNames.forEach(name => {
          if (resp[name]) result.set(name, this.getRelatedItems(resp[name]));
        });

        return result;
      });
  }

  getRelatedItems(url: string[]): RelatedItem[] {
    let result: RelatedItem[] = [];

    url.forEach(url => {
      this.swapi.getData(url.replace(Consts.ROOT_URL, ''))
        .then(resp => {
          result.push({
            itemName: resp.name || resp.title,
            imageUrl: `${resp.url
              .substring(0, (resp.url.length - 1))
              .replace('people', 'characters')
              .replace(Consts.ROOT_URL, Consts.IMAGE_URL)}.jpg`,
            link: resp.url.replace(Consts.ROOT_URL, `${location.origin}/`)
          });
        });
    });
    return result;
  }
}
