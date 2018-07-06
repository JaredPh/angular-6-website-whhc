import * as _ from 'lodash';
import { Image, Location } from '../events/events.models';

export class Club { // todo: move
  id: number;
  short: string;
  name: string;
  logo: Image;

  constructor(data: any) {
    this.id = data.id;
    this.short = data.short;
    this.name = data.name;
    this.logo = new Image(data.logo);
  }
}

export class Team { // todo: move
  id: number;
  short: string;
  name: string;
  type: string;
  club: Club;

  constructor(data: any) {
    this.id = data.id;
    this.short = data.short;
    this.name = data.name;
    this.type = data.type;

    this.club = new Club(data.club);
  }
}

export class Fixture {
  id: number;
  date: string;
  time: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: string;
  location: Location;

  constructor(data: any) {
    this.id = data.id;
    this.date = data.date;
    this.time = data.time;
    this.homeTeam = new Team(data.homeTeam);
    this.awayTeam = new Team(data.awayTeam);
    this.homeScore = data.homeScore;
    this.awayScore = data.awayScore;
    this.status = data.status;

    if (data.location) {
      this.location = new Location(data.location);
    }
  }
}

export class FixturesDay {
  date: string;
  home: Fixture[][];
  away: Fixture[];

  constructor(data: Fixture[]) {
    this.date = data[0].date;

    const fixturesByLocation = _.groupBy(data, (f) => ((f.homeTeam.club.id === 1) ? 'home' : 'away'));

    this.home = (() => {
      const homeFixturesByTime = _.groupBy(fixturesByLocation.home, (f) => f.time || 'tbc');
      return Object.keys(homeFixturesByTime).map((time) => homeFixturesByTime[time]);
    })();

    if (fixturesByLocation.away) {
      this.away = fixturesByLocation.away
        .sort((a, b) => {
          const sortStr = (str) => `${str.charAt(1)}${str.charAt(0)}`;

          sortStr(a.awayTeam.short).localeCompare(sortStr(b.awayTeam.short));
        }); 
    }
  }
}
