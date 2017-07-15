import { Component, Output } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Song } from '../../interfaces/Song';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {

  songs: any[];
  
  constructor(private searchService: SearchService) { }

  callSearch(value){ // I want to call this function
    console.log(value);
  }
  search(keyword) {
    this.searchService.search(keyword).subscribe(value => this.songs = value);
  }
}
