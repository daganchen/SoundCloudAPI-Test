import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit, OnChanges, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss']
})
export class RecentSearchesComponent implements OnInit, OnChanges {
  recentSearches: Array<any> = [];
  searchValue: string;
  @Output() buttonClicked = new EventEmitter();
  constructor(private localStorateSerivce: LocalStorageService) { }

  ngOnInit() {
    this.recentSearches = this.localStorateSerivce.getRecentSearches();
  }

  clearRecentSearches() {
    this.localStorateSerivce.clear();
  }

  onClick($event) {
    this.buttonClicked.emit($event.currentTarget.innerHTML);
  }

  ngOnChanges(){
    alert("change");
  }


}
