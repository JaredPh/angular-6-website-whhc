import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlToRoot'
})
export class UrlRootPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/^.*\/\/[^\/]+/, '');
  }
}
