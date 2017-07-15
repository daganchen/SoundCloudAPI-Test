import { Song } from './../../interfaces/Song';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {
  @Input() songs: Song[];
  @Input() selected: Song
  @Output() selectedChange: EventEmitter<Song> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
