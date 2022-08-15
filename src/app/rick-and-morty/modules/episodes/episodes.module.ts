import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { DisplayEpisodesComponent } from './pages/display-episodes/display-episodes.component';
import { MaterialModule } from '../../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [DisplayEpisodesComponent],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class EpisodesModule { }
