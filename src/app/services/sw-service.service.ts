import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as Consts from '../constants';

@Injectable({
  providedIn: 'root'
})

export class SwServiceService {
  
  constructor(private client: HttpClient) { }

  public getData(appendedUrl: String): Promise<any> {
    return this.client.get(`${Consts.ROOT_URL}${appendedUrl}`)
      .toPromise()
      .then(resp => {
        return (resp);
      });
  }
}

export class RelatedItem {
  itemName: string;
  imageUrl?: string;
  link?: string;
}
