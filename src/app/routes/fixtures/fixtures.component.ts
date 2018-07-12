import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { IAppState } from '../../app.store';
import { Club } from '../../components/clubs/clubs.models';
import { Fixture, FixturesDay, Team } from '../../components/fixtures/fixtures.models';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';
import { Router } from '@angular/router';

export interface LocationFilter {
  home: boolean;
  away: boolean;
}

@Component({
  templateUrl: './fixtures.component.html',
})
export class FixturesComponent implements OnInit {

  @select(s => s.requests.pending > 0) loading: Observable<boolean>;

  public showMobileFilterFlag: boolean;
  public type: string; // 'fixtures' | 'results'

  public teams: Team[];
  public clubs: Club[];
  public location: LocationFilter = {
    home: true,
    away: true,
  };

  public oppo = 0;

  public rawFixtures: Fixture[];
  public fixtures: FixturesDay[] = [];

  constructor(
    private redux: NgRedux<IAppState>,
    private pageLoader: PageLoaderService,
    private router: Router,
  ) {
    this.type = this.router.url.substr(1);
  }

  ngOnInit() {
    this.redux.select(s => s.clubs).subscribe((clubs) => {
      if (clubs.length > 0) {
        const club = clubs.find(c => c.id === 1);

        this.teams = club.teams
          .map(t => ({ ...t, show: true }));

        this.clubs = clubs
          .filter(c => c.id !== 1)
          .sort((a, b) => a.name.localeCompare(b.name));
      }
    });

    this.redux.select(s => s.fixtures.filter(f =>
      (this.type === 'fixtures') ? f.status === 'pending' : f.status !== 'pending')).subscribe((fixtures) => {
      if (fixtures.length > 0) {
        this.rawFixtures = fixtures;
        this.filterFixtures();
      }
    });
  }

  public locationChecked(location: string): boolean {
    if (location === 'all') {
      return this.location.home && this.location.away;
    } else {
      return !(this.location.home && this.location.away) && this.location[location];
    }
  }

  public sectionChecked(section: string): boolean {
    return this.teams
      .filter(t => t.type === section)
      .reduce((c, e) => c && e.show, true);
  }

  public toggleLocation(location: string, event: MouseEvent): void {
    let home = true;
    let away = true;

    switch (location) {
      case 'home':
        away = false;
        break;
      case 'away':
        home = false;
        break;
    }

    this.location = { home, away };

    this.filterFixtures();
  }

  public toggleSection(section: string): void {
    const result = !this.sectionChecked(section);
    const all = this.teams.reduce((c, e) => c && e.show, true);

    if (all) {
      event.preventDefault();
      this.teams
        .forEach(t => {
          console.log(t.name, t.type, section, t.type === section);
          t.show = t.type === section;
        });
    } else {
      this.teams
        .filter(t => t.type === section)
        .forEach(t => t.show = result);
    }

    this.filterFixtures();
  }

  public toggleTeam(id: number, event: MouseEvent): void {
    const index = this.teams.findIndex(t => t.id === id);
    const all = this.teams.reduce((c, e) => c && e.show, true);

    if (all) {
      event.preventDefault();
      this.teams.forEach((t, i) => {
        t.show = (i === index);
      });
    } else {
      this.teams[index].show = !(this.teams[index].show);
    }

    this.filterFixtures();
  }

  public setOppo(event) {
    this.oppo = +event.target.value;

    this.filterFixtures();
  }

  private filterFixtures() {
    this.loading.subscribe(state => {
      if (state === false) {
        this.pageLoader.clear();
      }
    });

    const teams = this.teams.reduce((c, e) => (e.show) ? [...c, e.id ] : c, []);

    const teamFilter = (f: Fixture): boolean =>
      (teams.indexOf(f.homeTeam.id)  >= 0 || teams.indexOf(f.awayTeam.id)  >= 0);

    const oppoFilter = (f: Fixture): boolean =>
      (this.oppo === 0 || this.oppo === f.homeTeam.club.id || this.oppo === f.awayTeam.club.id);

    const locationFilter = (f: Fixture): boolean =>
      (f.homeTeam.club.id === 1 && this.location.home) || (f.homeTeam.club.id !== 1 && this.location.away);

    const fixtures = this.rawFixtures
      .filter(f => oppoFilter(f) && teamFilter(f) && locationFilter(f));

    const obj = _.groupBy(fixtures, 'date');
    this.fixtures = Object.keys(obj).map(date => new FixturesDay(obj[date])).sort((a, b) =>
      (this.type === 'fixtures') ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)
    );
  }

  public toggleFilter(flag?: boolean): void {
    if (typeof flag === 'boolean') {
      this.showMobileFilterFlag = flag;
    } else {
      this.showMobileFilterFlag = !this.showMobileFilterFlag;
    }
  }
}
