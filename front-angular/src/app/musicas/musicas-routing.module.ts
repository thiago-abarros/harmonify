import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicasComponent } from './musicas/musicas.component';
import { FormMusicaComponent } from './form-musica/form-musica.component';

const routes: Routes = [
  {path: '', component: MusicasComponent},
  {path: 'adicionar', component: FormMusicaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicasRoutingModule { }
