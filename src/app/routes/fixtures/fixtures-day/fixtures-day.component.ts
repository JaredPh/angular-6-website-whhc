import { Component, Input } from '@angular/core';
import { FixturesDay } from '../../../components/fixtures/fixtures.models';
import { LocationFilter } from '../fixtures.component';

@Component({
  selector: 'whhc-fixtures-day',
  templateUrl: './fixtures-day.component.html',
})
export class FixturesDayComponent {

  @Input() day: FixturesDay;
}
