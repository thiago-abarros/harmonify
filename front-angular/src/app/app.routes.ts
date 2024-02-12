import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'musicas' },
  { path: 'musicas',
    loadChildren: () => import('./musicas/musicas.module').then(m => m.MusicasModule)
  }
];
