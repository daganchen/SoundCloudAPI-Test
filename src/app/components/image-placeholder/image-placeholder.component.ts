import { Song } from './../../interfaces/Song';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-image-placeholder',
  templateUrl: './image-placeholder.component.html',
  styleUrls: ['./image-placeholder.component.scss']
})
export class ImagePlaceholderComponent implements OnChanges {
  @Input() song: Song;
  private toggleIframe: boolean
  constructor() {
    this.toggleIframe = false;
  }

  ngOnChanges() {
    this.toggleIframe = false;
  }
  
  handleImageClick() {
    this.toggleIframe = !this.toggleIframe;
  }


}
