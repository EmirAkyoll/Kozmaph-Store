import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'configureDecimalPlaces'
})
export class ConfigureDecimalPlacesPipe implements PipeTransform {
  transform(value: number, number_of_digits: number = 3): string {
    if (value === null || value === undefined) {
      return '';
    }

    return value.toFixed(number_of_digits);
  }
}
