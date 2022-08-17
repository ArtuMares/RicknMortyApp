import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { DisplayCharactersComponent } from './pages/display-characters/display-characters.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { ViewCharacterComponent } from './pages/view-character/view-character.component';



@NgModule({
  declarations: [DisplayCharactersComponent, CharacterCardComponent, ViewCharacterComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class CharactersModule { }
