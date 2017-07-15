import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  private recentSearches: Array<string> = [];
  private MAX_ARRAY_SIZE: number = 5;
  private KEY: string = "recentSearches";
  constructor() {

  }
  addKeyword(keyword) {
    this.recentSearches = this.getRecentSearches();
    if (!(this.recentSearches.includes(keyword))) {
      this.recentSearches.push(keyword);
      if (this.recentSearches.length > this.MAX_ARRAY_SIZE) {
        this.recentSearches.shift();
      }
      localStorage.setItem(this.KEY, JSON.stringify(this.recentSearches));
    }
  }
  getRecentSearches(): Array<any> {
    if (JSON.parse(localStorage.getItem(this.KEY)) == null)
      return [];
    return JSON.parse(localStorage.getItem(this.KEY));
  }

  clear(): void {
    localStorage.removeItem(this.KEY);
  }
}
