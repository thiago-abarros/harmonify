import { Component } from '@angular/core';
import { Musica } from '../modelos/musica';
import { MusicasService } from '../servicos/musicas.servico';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogoErroComponent } from '../../compartilhado/componentes/dialogo-erro/dialogo-erro.component';

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
    public dialogo: MatDialog
    ) {
    this.fonteDados$ = this.musicasServico.listarMusicas().pipe(
      catchError( error => {
        this.emErro('Erro ao carregar músicas.');
        return of([])
      }));
    this.colunasMostradas = ['nome', 'artista', 'generoMusical'];
    }

    emErro(mensagemErro: string) {
      this.dialogo.open(DialogoErroComponent, {
        data: mensagemErro
      });
    }
}
