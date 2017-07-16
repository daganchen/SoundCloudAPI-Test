import { Song } from './../../interfaces/Song';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  @Input() currentSong: Song;
  streamUrl: SafeResourceUrl;
  iframe: any;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl("https://w.soundcloud.com/player/?url=" + this.currentSong.streamUrl + "&amp;auto_play=true;height:100;")
  }

}
