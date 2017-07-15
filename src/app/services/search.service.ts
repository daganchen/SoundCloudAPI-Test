import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Song } from '../interfaces/Song';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://api.soundcloud.com/tracks?client_id=';
const NO_IMAGE = 'http://i.imgur.com/F2Nsuci.jpg';
@Injectable()
export class SearchService {

  private clientId: string = '8e1349e63dfd43dc67a63e0de3befc68';

  constructor(private http: Http, private localStorageService: LocalStorageService) { 
    
  }

  search(keyword): Observable<Song[]> {
    this.localStorageService.addKeyword(keyword);
    let url = this.generateSearchUrl(keyword);
    return this.http.get(url)
      .map(res => this.extractData(res))
      .catch(this.handleError);
  }
  /**
   * Extract data into Song entites, return stream to component.
   */
  private extractData(res: Response) {
    let data = res.json();
    let resultsArr = [];
    if (data) {
      data.forEach(function (item) {
        let song : Song = <Song>{};
        song.streamUrl = item.uri;
        song.name = item.title;
        song.idFromProvider = item.id;
        song.imageUrl = item.artwork_url ? item.artwork_url : NO_IMAGE;
        song.link = item.permalink_url;
        resultsArr.push(song);
      });
    }
    return resultsArr;
  }
  /**
   * Handle when error occurs.
   */
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  /**
   * Append user input into url.
   */
  generateSearchUrl(keyword: string): string {
    return BASE_URL + this.clientId + '&q=' + keyword;
  }
}
