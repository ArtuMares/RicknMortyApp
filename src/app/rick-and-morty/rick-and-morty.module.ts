import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickAndMortyRoutingModule } from './rick-and-morty-routing.module';
import { MainComponent } from './pages/main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResidentUrlPipe } from './pipes/resident-url.pipe';



@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    ResidentUrlPipe
   ],
  imports: [
    CommonModule,
    RickAndMortyRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class RickAndMortyModule { }
