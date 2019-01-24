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
  category: string = '';
  itemList: any[];
  totalPages: number = 0;
  currentPage: number = 1;

  constructor(private route: ActivatedRoute, private swapi: SwServiceService, private ngZone: NgZone) {
    this.category = this.route.snapshot.paramMap.get('type');
    this.currentPage = (+this.route.snapshot.queryParamMap.get('page')) || 1;
  }

  ngOnInit() {
    this.getItemList(this.category);
  }

  getItemList(category: string) {
    this.swapi.getData(`${category}?page=${this.currentPage}`)
      .then(resp => {
        this.totalPages = Math.ceil(resp.count / 10);

        resp.results.forEach(item => {
          let tempUrl = item['url']
            .substring(0, (item['url'].length - 1))
            .replace('people', 'characters');

          let tempImgUrl = tempUrl.replace(Consts.ROOT_URL, Consts.IMAGE_URL);

          item = Object.assign(item,
            {
              imageUrl: `${tempImgUrl}.jpg`,
              link: `${item['url'].replace(Consts.ROOT_URL, `${location.origin}/StarWars/`)}`
            }
          );
        });
        this.itemList = resp.results;
      });
  }

  getPaging() {
    let paging = Array(this.totalPages)
      .fill(0)
      .map((item, index) => item = index + 1);

    return paging;
  }

  shouldShowPaginator(): boolean {
    let pages: number[] = this.getPaging();
    return (pages[pages.length - 1]) > 1;
  }

  click(page: number) {
    let url = `${location.origin}/StarWars/${this.category}?page=${page}`;
    window.history.pushState({ path: url }, '', url);
    this.currentPage = page;
    this.getItemList(this.category);
  }
}
