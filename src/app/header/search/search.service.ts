import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TMDB_KEY } from './../../app.api';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

  constructor(private _httpClient: HttpClient) { }

  getSearch(title?: string): Observable<any> {
    let params: HttpParams = undefined
    if(title) {
      params = new HttpParams().append('', title)
    } 
    return this._httpClient.get<any>(`https://api.themoviedb.org/3/search/movie?${TMDB_KEY}&language=en-US&query=${params}&page=1&include_adult=false`)
  }

}
