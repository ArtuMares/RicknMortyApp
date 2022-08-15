import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayLocationsComponent } from './pages/display-locations/display-locations.component';

const routes: Routes = [
  {path: "", component: DisplayLocationsComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
