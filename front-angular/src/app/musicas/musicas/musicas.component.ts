import { Component } from '@angular/core';
import { Musica } from '../modelos/musica';
import { MusicasService } from '../servicos/musicas.servico';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogoErroComponent } from '../../compartilhado/componentes/dialogo-erro/dialogo-erro.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrl: './musicas.component.scss',
})

export class MusicasComponent {
  colunasMostradas: string[];
  fonteDados$: Observable<Musica[]>;

  constructor(
    private musicasServico: MusicasService,
    public dialogo: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.fonteDados$ = this.musicasServico.listarMusicas().pipe(
      catchError( error => {
        this.emErro('Erro ao carregar músicas.');
        return of([])
      }));
    this.colunasMostradas = ['foto', 'nome', 'artista', 'generoMusical', 'duracao', 'dataLancamento'];
    }

    emErro(mensagemErro: string) {
      this.dialogo.open(DialogoErroComponent, {
        data: mensagemErro
      });
    }

    onAdicionar() {
      this.router.navigate(['adicionar'], {relativeTo: this.route});
    }

}
