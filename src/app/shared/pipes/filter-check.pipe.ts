import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCheck'
})
export class FilterCheckPipe implements PipeTransform {

  transform(value: any[], input: string) {
    if (input) {
        input = input.toLowerCase();
        return value.filter(function (el: any) {   // <---- data type!
            return (
              el.toLowerCase().indexOf(input)
            ) > -1;
        });
    }
    return value;
}

}
