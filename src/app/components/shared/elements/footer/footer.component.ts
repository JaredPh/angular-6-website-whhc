import { Component, OnInit } from '@angular/core';
import {IImage} from "../../../media/media.interfaces";

// todo: move me
export interface ISocialNetwork {
 id: string;
 label: string;
 logo: IImage;
 url: string;
}

@Component({
  selector: 'whhc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public socialNetworks: ISocialNetwork[] = [
    {
      id: 'instagram',
      label: '/westhampsteadhockeyclub',
      logo: { url: '/assets/instagram.png', width: 150, height: 150 },
      url: 'https://www.instagram.com/westhampsteadhockeyclub',
    },
    {
      id: 'facebook',
      label: '/west.hampstead.hockey.club',
      logo: { url: '/assets/facebook.png', width: 150, height: 150 },
      url: 'https://www.facebook.com/west.hampstead.hockey.club',
    },
    {
      id: 'twitter',
      label: '/WHHCUK',
      logo: { url: '/assets/twitter.png', width: 150, height: 150 },
      url: 'https://twitter.com/WHHCUK',
    },
    {
      id: 'youtube',
      label: '/WHHC',
      logo: { url: '/assets/youtube.png', width: 150, height: 150 },
      url: 'https://www.youtube.com/EnglandHockeyTV',
    },
  ];

  constructor() { }

  ngOnInit() {
  }
}
