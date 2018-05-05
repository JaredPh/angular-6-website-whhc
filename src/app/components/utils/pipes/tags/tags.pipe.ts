import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as timeAgo from 'time-ago';

@Pipe({
  name: 'tagName'
})
export class TagsPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('-', ' ');
  }

}
