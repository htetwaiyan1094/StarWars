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
  totalPages: number = 5;

  constructor(private swapi: SwServiceService, private route: ActivatedRoute, private ngZone: NgZone) { }

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('type');
    const id = this.route.snapshot.paramMap.get('id');

    this.getItemDetails(category, id);
  }

  getItemDetails(category: string, id: string) {
    this.swapi.getData(`${category}/${id}`)
      .subscribe(resp => {
        this.details = resp;
        this.details.characters.forEach(url => {
          this.pushRelatedItem(url.replace(Consts.ROOT_URL, ''));
        });
      });
  }

  pushRelatedItem(url: string): void {
    this.swapi.getData(url)
      .subscribe(resp => {
        this.relatedItems.push({
          itemName: resp.name || resp.title
        });
      });
  }

  getPaging() {
    let paging = Array(this.totalPages)
      .fill(0)
      .map((item, index) => item = index + 1);

    return paging;
  }

  click(page: number) {
    console.log(page);
  } 
}
