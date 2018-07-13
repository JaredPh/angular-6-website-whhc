import { Image } from '../events/events.models';
import { Team } from '../fixtures/fixtures.models';

export class Club {
  id: number;
  short: string;
  name: string;
  logo: Image;
  teams?: Team[];

  constructor(data: any) {
    this.id = data.id;
    this.short = data.short;
    this.name = data.name;

    if (data.logo) {
      this.logo = new Image(data.logo);
    } else {
      console.log('c---', data);
    }

    if (data.teams) {
      this.teams = data.teams;
    }
  }
}
