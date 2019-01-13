import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwServiceService } from '../services/sw-service.service';
import * as Consts from '../constants';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  itemList: any[];

  constructor(private route: ActivatedRoute, private swapi: SwServiceService, private ngZone: NgZone) {
    console.log(this.route.snapshot.paramMap);
  }

  ngOnInit() {
    this.getItemList(this.route.snapshot.paramMap.get('type'));
  }

  getItemList(category: string) {
    this.swapi.getData(category)
      .subscribe(resp => {
        resp.results.forEach(item => {
          let tempUrl = item['url']
            .substring(0, (item['url'].length-1))
            .replace(Consts.ROOT_URL, Consts.IMAGE_URL)
            .replace('people', 'characters');
          item = Object.assign(item, { imageUrl : `${tempUrl}.jpg`});
        });
        this.itemList = resp.results;
      });
  }
}
