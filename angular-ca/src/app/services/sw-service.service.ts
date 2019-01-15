import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as Consts from '../constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SwServiceService {
  
  constructor(private client: HttpClient) { }

  public getData(appendedUrl: String): Observable<any> {
    return this.client.get(`${Consts.ROOT_URL}${appendedUrl}`);
  }
}

export class RelatedItem {
  itemName: string;
  imageUrl?: string;
  link?: string;
}
