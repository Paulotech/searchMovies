import { SearchService } from './../../header/search/search.service';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap, debounce, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendings: any
  search = new FormControl('');
  movies: any
  constructor(private _service: HomeService, private _serviceSearch: SearchService) { }

  ngOnInit(): void {

    this._service.getTrending().subscribe( resp => {
       this.trendings = resp.results
       console.log(resp.results)
    });
    this.getValues()
  }

  getValues() {
    this.search.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap( title => this._serviceSearch.getSearch(title))
    ).subscribe( (resp) =>  {
      this.trendings = resp.results
      console.log('retorno', resp.results)
      console.log('Movies', this.trendings) 
    })
  }

  asdfasdfasdf
}
