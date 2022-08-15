import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { DisplayCharactersComponent } from './pages/display-characters/display-characters.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [DisplayCharactersComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class CharactersModule { }
