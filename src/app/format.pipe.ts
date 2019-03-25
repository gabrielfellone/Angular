import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if(value){
    return value.toUpperCase();
    }

  }

}
