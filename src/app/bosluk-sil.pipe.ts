import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boslukSil',
})
export class BoslukSilPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\s+/g, '');
  }
}
