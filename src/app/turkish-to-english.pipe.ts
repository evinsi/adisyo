import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'turkishToEnglish',
})
export class TurkishToEnglishPipe implements PipeTransform {
  transform(value: string): string {
    const turkishChars: { [key: string]: string } = {
      ğ: 'g',
      Ğ: 'G',
      ü: 'u',
      Ü: 'U',
      ş: 's',
      Ş: 'S',
      ı: 'i',
      İ: 'I',
      ö: 'o',
      Ö: 'O',
      ç: 'c',
      Ç: 'C',
    };

    return value.replace(
      /[ğĞüÜşŞıİöÖçÇ]/g,
      (match) => turkishChars[match] || match
    );
  }
}
