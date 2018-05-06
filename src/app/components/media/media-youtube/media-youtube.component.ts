import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'whhc-media-youtube',
  templateUrl: './media-youtube.component.html',
  styleUrls: ['./media-youtube.component.scss']
})
export class MediaYoutubeComponent implements OnInit {

  @Input() code: string;
  @Input() align: string;

  public url;
  constructor(
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    const url = `https://www.youtube.com/embed/${this.code}?rel=0&amp;showinfo=0`;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
