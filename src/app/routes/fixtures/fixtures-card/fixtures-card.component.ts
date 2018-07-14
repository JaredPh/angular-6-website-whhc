import { Component, Input } from '@angular/core';
import { Fixture } from '../../../components/fixtures/fixtures.models';

@Component({
  selector: 'whhc-fixtures-card',
  templateUrl: './fixtures-card.component.html',
})
export class FixturesCardComponent {

  @Input() fixture: Fixture;
}
