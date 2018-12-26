import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideShow'
})
export class HideShowPipe implements PipeTransform {

  transform(shown: boolean): string {
      return shown ? 'Hide' : 'Show';
  }

}
