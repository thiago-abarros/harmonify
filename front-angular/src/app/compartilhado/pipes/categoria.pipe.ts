import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(value: unknown): unknown {
    switch(value) {
      case 'Pop': return 'mic';
      case 'Jazz': return 'piano'

      default: return 'music_note'
    }
  }

}
