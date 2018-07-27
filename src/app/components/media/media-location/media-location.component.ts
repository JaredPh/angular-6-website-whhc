import { Component, Input, OnChanges } from '@angular/core';
import { Location } from '../../shared/models/locations.models';
import * as moment from 'moment';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'whhc-media-location',
  templateUrl: './media-location.component.html',
})
export class MediaLocationComponent implements OnChanges {

  @Input() location: Location;
  @Input() start?: string;

  public transport: any; // todo: typings

  constructor(private httpService: HttpService,) {
  }

  ngOnChanges() {
    if (!this.location.home) {
      const future = (this.start)
        ? moment(this.start).diff(moment()) > 0
        : false;

      if (future) {
        this.setTransport();
      }
    }
  }

  private setTransport() {
    const httpResponse = this.httpService.get(`/locations/${this.location.id}/transport?start=${this.start}`);

    httpResponse.subscribe(
      (data: any) => {
        this.transport = data.results[0];
      },
      (error) => {
        // todo: do something
      },
    );
  }
}
