import { HostListener } from '@angular/core';
import { Song } from '../../interfaces/Song';
import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  selectedSong: Song;
  @Input() songs: Song[];
   
  constructor() { }

}
