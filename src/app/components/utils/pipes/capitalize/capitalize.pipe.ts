import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as timeAgo from 'time-ago';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, format: string = 'sentence'): string {
    switch (format) {
      case 'all':
        return value.toUpperCase();
      case 'sentence':
       return `${value.charAt(0).toUpperCase()}${value.substring(1)}`;
      case 'word':
        return value.split(' ').map(w => `${w.charAt(0).toUpperCase()}${w.substring(1)}`).join(' ');
    }
  }

}
