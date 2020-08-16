import { TMDB_KEY } from './../../app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, map } from 'rxjs/operators'

@Injectable()
export class HomeService {
  url: string = `https://api.themoviedb.org/3/trending/movie/week?${TMDB_KEY}`

  constructor(private _httpClient: HttpClient) { }

  getTrending(): Observable<any> {
    return this._httpClient.get<any>(this.url)
  }
}
