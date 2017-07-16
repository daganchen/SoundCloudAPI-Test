import { LocalStorageService } from './../../services/local-storage.service';
import { Component, Output, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Song } from '../../interfaces/Song';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  songs: any[];
  isSearchHistroyExists: boolean;

  constructor(private searchService: SearchService,private localStorageService: LocalStorageService) { }

  ngOnInit() {
   this.isSearchHistroyExists = this.localStorageService.isItemExists("recentSearches");
  }
  search(keyword) {
    this.searchService.search(keyword).subscribe(value => this.songs = value);
  }
}
