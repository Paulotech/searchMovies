import { SearchService } from './../../header/search/search.service';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendings: any;
  search = new FormControl('');
  movies: any;
  popularity: number;
  noFind: boolean = false;

  panelOpenState = false;
  populares = false;
  constructor(
    private _service: HomeService,
    private _serviceSearch: SearchService
  ) {}

  ngOnInit(): void {
    this._service.getTrending().subscribe((resp) => {
      this.movies = resp.results;
    });

    this.getValues();
    this.getPopularity();
  }
  getPopularity() {
    this._service.getPopularity().subscribe((resp) => {
      this.popularity = resp.results;
    });
  }
  getValues() {
    this.search.valueChanges
      .pipe(
        debounceTime(0),
        distinctUntilChanged(),
        switchMap((title) => this._serviceSearch.getSearch(title))
      )
      .subscribe((resp) => {
        this.populares = false;
        this.trendings = resp.results;
        if (this.trendings.length === 0) {
          this.noFind = true;
        } else {
          this.noFind = false;
        }
      });
  }
}
