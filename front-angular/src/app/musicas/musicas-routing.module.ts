import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicasComponent } from './musicas/musicas.component';

const routes: Routes = [
  {path: '', component: MusicasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicasRoutingModule { }
