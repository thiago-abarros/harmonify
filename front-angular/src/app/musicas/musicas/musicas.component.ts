import { Component } from '@angular/core';
import { Musica } from '../modelos/musica';
import { MusicasService } from '../servicos/musicas.servico';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrl: './musicas.component.scss',
})

export class MusicasComponent {
  colunasMostradas: string[];
  fonteDados$: Observable<Musica[]>;

  constructor(private musicasServico: MusicasService) {
    this.fonteDados$ = this.musicasServico.listarMusicas();
    this.colunasMostradas = ['nome', 'artista', 'generoMusical'];
  }
}
