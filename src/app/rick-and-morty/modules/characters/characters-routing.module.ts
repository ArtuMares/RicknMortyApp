import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayCharactersComponent } from './pages/display-characters/display-characters.component';

const routes: Routes = [
  {path: "", component: DisplayCharactersComponent},
  {path: "**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
