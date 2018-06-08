import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeToStr'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {

    let output = '';

    const hours = Math.floor(value / 3600);
    const minutes = Math.floor(value % 3600 / 60);

    if (hours > 0) {
      output += `${hours}${(hours === 1) ? 'hr' : 'hrs'} `;
    }

    output += `${minutes}${(minutes === 1) ? 'min' : 'mins'}`;

    return output;
  }

}
