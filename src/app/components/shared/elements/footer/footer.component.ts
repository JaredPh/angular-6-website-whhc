import { Component } from '@angular/core';

interface ILink {
  id: string;
  label: string;
  logo: string;
  url: string;
}

@Component({
  selector: 'whhc-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  public links: ILink[] = [
    {
      id: 'alan-day',
      label: 'Alan Day VW',
      logo: 'https://media.whhc.uk/bcad33b7-ee47-41de-bd0f-9bd45ba5eaab.png',
      url: '/club-info/sponsors-friends-and-family/alan-day-vw',
    },
    {
      id: 'studio-society',
      label: 'Studio Society',
      logo: 'https://media.whhc.uk/7d2fd1bc-786c-4a99-ba74-3589d782ba1f.png',
      url: '/club-info/sponsors-friends-and-family/studio-society',
    },
    {
      id: 'porkys',
      label: 'Porky\'s BBQ',
      logo: 'https://media.whhc.uk/91801982-b224-4450-8990-bdecb18a2b59.png',
      url: '/club-info/sponsors-friends-and-family/porkys-west-hampstead',
    },
    {
      id: 'cumberland-tennis',
      label: 'Cumberland Lawn Tennis Club',
      logo: 'https://media.whhc.uk/f8fad495-06ae-4f14-92e8-f646bacb9989.png',
      url: '/club-info/sponsors-friends-and-family/cumberland-lawn-tennis-club',
    },
    {
      id: 'hampstead-cricket',
      label: 'Hampstead Cricket Club',
      logo: 'https://media.whhc.uk/c2425534-052c-46a2-927c-712600d7758c.png',
      url: '/club-info/sponsors-friends-and-family/hampstead-cricket-club',
    },
  ];

  public socialNetworks: ILink[] = [
    {
      id: 'instagram',
      label: '/westhampsteadhockeyclub',
      logo: '/assets/icons/social/instagram.png',
      url: 'https://www.instagram.com/westhampsteadhockeyclub',
    },
    {
      id: 'facebook',
      label: '/west.hampstead.hockey.club',
      logo: '/assets/icons/social/facebook.png',
      url: 'https://www.facebook.com/west.hampstead.hockey.club',
    },
    {
      id: 'twitter',
      label: '/WHHCUK',
      logo: '/assets/icons/social/twitter.png',
      url: 'https://twitter.com/WHHCUK',
    },
    // {
    //   id: 'youtube',
    //   label: '/WHHC',
    //   logo: '/assets/icons/social/youtube.png',
    //   url: 'https://www.youtube.com/EnglandHockeyTV',
    // },
  ];
}
