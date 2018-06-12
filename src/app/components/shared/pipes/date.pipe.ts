import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as timeAgo from 'time-ago';

@Pipe({
  name: 'dateToStr'
})
export class DatePipe implements PipeTransform {

  transform(value: number | string, format: string = 'YYYY-MM-DD HH:mm:ss'): string {
    if (typeof value === 'string') {
      value = +moment(value);
    }

    if (format === 'fuzzy') {
      return timeAgo.ago(value);
    }
    return moment(value).format(format);
  }

}
