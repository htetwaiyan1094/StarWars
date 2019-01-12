import { Component, OnInit } from '@angular/core';
import { SwServiceService } from '../services/sw-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private swapi: SwServiceService) { }

  data: any;

  ngOnInit() {
    this.swapi.getRoot()
      .subscribe(resp => this.data = resp);
  }

}
