import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { DisplayEpisodesComponent } from './pages/display-episodes/display-episodes.component';
import { MaterialModule } from '../../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ViewEpisodeComponent } from './pages/view-episode/view-episode.component';
import { EpisodesCardComponent } from './components/episodes-card/episodes-card.component';


@NgModule({
  declarations: [DisplayEpisodesComponent , ViewEpisodeComponent, EpisodesCardComponent],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class EpisodesModule { }
