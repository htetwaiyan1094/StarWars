import { Component, OnInit, NgZone } from '@angular/core';
import { SwServiceService, RelatedItem } from '../services/sw-service.service';
import { ActivatedRoute } from '@angular/router';
import * as Consts from '../constants';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  details: any = {};
  relatedItems = new Map;

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
        this.details = resp;
        let test = new Map;
        propNames.forEach(name => {
          if (resp[name]) test.set(name, this.getRelatedItems(resp[name]));
        });
        return test;
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
              link: resp.url.replace(Consts.ROOT_URL, '')
            });
          }
        );
        console.log(result);
      }
    );
    console.log(result);

    return result;
  }
}
