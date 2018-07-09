import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { IAppState } from '../../app.store';
import { Club } from '../../components/clubs/clubs.models';
import { ClubsService } from '../../components/clubs/clubs.service';
import { Fixture, FixturesDay, Team } from '../../components/fixtures/fixtures.models';
import { FixturesService } from '../../components/fixtures/fixtures.service';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';

export interface LocationFilter {
  home: boolean;
  away: boolean;
}

@Component({
  templateUrl: './fixtures.component.html',
})
export class FixturesComponent implements OnInit {

  @select(s => s.requests.pending > 0) loading: Observable<boolean>;

  public teams: Team[];
  public clubs: Club[];
  public location: LocationFilter = {
    home: true,
    away: true,
  };

  public rawFixtures: Fixture[];
  public fixtures: FixturesDay[] = [];

  constructor(
    private redux: NgRedux<IAppState>,
    private fixturesService: FixturesService,
    private clubsService: ClubsService,
    private pageLoader: PageLoaderService,
  ) {}

  ngOnInit() {
    this.pageLoader.clear(); // todo: move to guard


    this.redux.select(s => s.clubs).subscribe((clubs) => {
      if (clubs.length > 0) {
        const club = clubs.find(c => c.id === 1);

        this.teams = club.teams
          .map(t => ({ ...t, show: true }));

        this.clubs = clubs
          .filter(c => c.id !== 1)
          .sort((a, b) => a.name.localeCompare(b.name));
      } else {
        this.clubsService.loadClubs();
      }
    });

    this.redux.select(s => s.fixtures).subscribe((fixtures) => {
      if (fixtures.length > 0) {
        this.rawFixtures = fixtures;
        this.filterTeams();
      } else {
        this.fixturesService.loadFixtures();
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

    this.filterTeams();
  }

  public toggleSection(section: string): void {
    const result = !this.sectionChecked(section);
    this.teams
      .filter(t => t.type === section)
      .forEach(t => t.show = result);

    this.filterTeams();
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

    this.filterTeams();
  }

  private filterTeams() {
    const teams = this.teams.reduce((c, e) => (e.show) ? [...c, e.id ] : c, []);

    const fixtures = this.rawFixtures
      .filter(f => (
        (f.homeTeam.club.id === 1 && this.location.home) ||
        (f.homeTeam.club.id !== 1 && this.location.away)
      ))
      .filter(f => (teams.indexOf(f.homeTeam.id)  >= 0 || teams.indexOf(f.awayTeam.id)  >= 0));

    const obj = _.groupBy(fixtures, 'date');
    this.fixtures = Object.keys(obj).map(date => new FixturesDay(obj[date]));
  }
}
