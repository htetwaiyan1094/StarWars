import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-related-item',
  templateUrl: './related-item.component.html',
  styleUrls: ['./related-item.component.css']
})
export class RelatedItemComponent implements OnInit {

  @Input() items = new Map;

  constructor() { }

  ngOnInit() {
  }

}
