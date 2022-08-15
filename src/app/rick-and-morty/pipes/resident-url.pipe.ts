import { Pipe, PipeTransform } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { Character } from '../../interfaces/character';

@Pipe({
  name: 'residentUrl'
})
export class ResidentUrlPipe implements PipeTransform {

  constructor(private cs: CharactersService) { }

   transform(residentUrl: string) {
   
  }
}
