import { switchMap, debounce, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search = new FormControl('');
  movies: any
  constructor(private _service: SearchService) { }

  ngOnInit(): void {
    this.getValues()
  }

  getValues() {
    this.search.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap( title => this._service.getSearch(title))
    ).subscribe( (resp) =>  {
      this.movies = resp.results
      console.log('retorno', resp.results)
      console.log('Movies', this.movies) 
    })
  }


  // this.search.valueChanges
  // .debounceTime(500)
  // .distinctUntilChanged()
  // .switchMap( searchTerm => this.restaurantsService.restaurants(searchTerm)
  // .catch(error => Observable.from([])))
  // .subscribe(restaurants => this.restaurants = restaurants)
}
