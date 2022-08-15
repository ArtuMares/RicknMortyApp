import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayEpisodesComponent } from './pages/display-episodes/display-episodes.component';

const routes: Routes = [
  {path:"", component: DisplayEpisodesComponent},
  {path:"**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }
