import { Component } from '@angular/core';
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
export class FooterComponent {

  public links: ILink[] = [
    {
      id: 'studio-society',
      label: 'Studio Society',
      logo: { url: '/assets/images/sponsors/site-studio.jpg', width: 200, height: 200, description: 'studio society logo' },
      url: 'https://studio-society.com/',
    },
    {
      id: 'alan-day',
      label: 'Alan Day VW',
      logo: { url: '/assets/images/sponsors/alan-day-vw.png', width: 200, height: 200, description: 'alan day vw logo' },
      url: 'https://www.alandayvw.co.uk/',
    },
    {
      id: 'one-bourbon-tavern',
      label: 'One Bourbon Tavern',
      logo: { url: '/assets/images/sponsors/one-bourbon-tavern.jpg', width: 200, height: 200, description: 'one bourbon tavern logo' },
      url: 'http://www.onebourbon.co.uk/',
    },
    {
      id: 'cumberland-tennis',
      label: 'Cumberland Lawn Tennis Club',
      logo: { url: '/assets/images/sponsors/cltc.png', width: 200, height: 200, description: 'cumberland lawn tennis club logo' },
      url: 'https://www.cltc-hcc.com/',
    },
    {
      id: 'hampstead-cricket',
      label: 'Hampstead Cricket Club',
      logo: { url: '/assets/images/sponsors/hcc.png', width: 200, height: 200, description: 'hampstead cricket club logo' },
      url: 'https://www.cltc-hcc.com/cricket/',
    },
  ];

  public socialNetworks: ILink[] = [
    {
      id: 'instagram',
      label: '/westhampsteadhockeyclub',
      logo: { url: '/assets/icons/social/instagram.png', width: 150, height: 150, description: 'instagram logo' },
      url: 'https://www.instagram.com/westhampsteadhockeyclub',
    },
    {
      id: 'facebook',
      label: '/west.hampstead.hockey.club',
      logo: { url: '/assets/icons/social/facebook.png', width: 150, height: 150, description: 'facebook logo' },
      url: 'https://www.facebook.com/west.hampstead.hockey.club',
    },
    {
      id: 'twitter',
      label: '/WHHCUK',
      logo: { url: '/assets/icons/social/twitter.png', width: 150, height: 150, description: 'twitter logo' },
      url: 'https://twitter.com/WHHCUK',
    },
    {
      id: 'youtube',
      label: '/WHHC',
      logo: { url: '/assets/icons/social/youtube.png', width: 150, height: 150, description: 'youtube logo' },
      url: 'https://www.youtube.com/EnglandHockeyTV',
    },
  ];
}
