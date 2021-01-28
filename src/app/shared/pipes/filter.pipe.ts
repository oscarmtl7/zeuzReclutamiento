import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], input: string) {
    if (input) {
        input = input.toLowerCase();
        return value.filter(function (el: any) {   // <---- data type!
            console.log(el.birthday.toString().indexOf(input))
            return (
              el.name.toLowerCase().indexOf(input) &&
              el.last_name.toLowerCase().indexOf(input) &&
              el.birthday.toString().indexOf(input) &&
              el.id.toString().indexOf(input)
            ) > -1;
        });
    }
    return value;
}

}
