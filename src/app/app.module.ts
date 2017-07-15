import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ImagePlaceholderComponent } from './components/image-placeholder/image-placeholder.component';
import { ResultsComponent } from './components/results/results.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SongComponent } from './components/song/song.component';
import { ResultsListComponent } from './components/results-list/results-list.component';
import { RecentSearchesComponent } from './components/recent-searches/recent-searches.component';

import { SearchService } from './services/search.service';
import { LocalStorageService } from './services/local-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    ImagePlaceholderComponent,
    ResultsComponent,
    SearchComponent,
    HeaderComponent,
    SongComponent,
    ResultsListComponent,
    RecentSearchesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [SearchService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
