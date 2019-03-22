import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    if (args === undefined) {
      args = 'LLLL';
    }
    moment.locale('ru');
    return moment(value).format(args);
  }

}
