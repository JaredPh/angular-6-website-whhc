import { Component, OnInit } from '@angular/core';
import { IImage } from '../../../media/media.interfaces';

interface ILink {
  id: string;
  label: string;
  logo: IImage;
  url: string;
}

@Component({
  selector: 'whhc-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  public links: ILink[] = [
    {
      id: 'studio-society',
      label: 'Studio Society',
      logo: { url: '/assets/site-studio.jpg', width: 200, height: 200 },
      url: 'https://studio-society.com/',
    },
    {
      id: 'alan-day',
      label: 'Alan Day VW',
      logo: { url: '/assets/alan-day-vw.png', width: 200, height: 200 },
      url: 'https://www.alandayvw.co.uk/',
    },
    {
      id: 'one-bourbon-tavern',
      label: 'One Bourbon Tavern',
      logo: { url: '/assets/one-bourbon-tavern.jpg', width: 200, height: 200 },
      url: 'http://www.onebourbon.co.uk/',
    },
    {
      id: 'cumberland-tennis',
      label: 'Cumberland Lawn Tennis Club',
      logo: { url: '/assets/cltc.png', width: 200, height: 200 },
      url: 'https://www.cltc-hcc.com/',
    },
    {
      id: 'hampstead-cricket',
      label: 'Hampstead Cricket Club',
      logo: { url: '/assets/hcc.png', width: 200, height: 200 },
      url: 'https://www.cltc-hcc.com/cricket/',
    },
  ];

  public socialNetworks: ILink[] = [
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
