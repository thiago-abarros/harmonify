import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Musica } from '../model/musica';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

const MUSICAS_DADOS: Musica[] = [
  {
    id_musica: '1',
    nome: 'Bad Guy',
    artista: 'Beliche',
    generoMusical: 'Indie',
  },
  {
    id_musica: '2',
    nome: '7 rings',
    artista: 'Ariana Grande',
    generoMusical: 'Eletrônica',
  },
  {
    id_musica: '3',
    nome: 'Bohemian Rhapsody',
    artista: 'Queen',
    generoMusical: 'Rock',
  },
  {
    id_musica: '4',
    nome: 'Shape of You',
    artista: 'Ed Sheeran',
    generoMusical: 'Pop',
  },
  {
    id_musica: '5',
    nome: 'Smells Like Teen Spirit',
    artista: 'Nirvana',
    generoMusical: 'Grunge',
  },
  {
    id_musica: '6',
    nome: 'Rolling in the Deep',
    artista: 'Adele',
    generoMusical: 'Soul',
  },
  {
    id_musica: '7',
    nome: "Sweet Child o' Mine",
    artista: "Guns N' Roses",
    generoMusical: 'Hard Rock',
  },
  {
    id_musica: '8',
    nome: 'Billie Jean',
    artista: 'Michael Jackson',
    generoMusical: 'Pop',
  },
  {
    id_musica: '9',
    nome: 'Hotel California',
    artista: 'Eagles',
    generoMusical: 'Rock',
  },
  {
    id_musica: '10',
    nome: 'Stairway to Heaven',
    artista: 'Led Zeppelin',
    generoMusical: 'Rock',
  },
  {
    id_musica: '11',
    nome: 'Wonderwall',
    artista: 'Oasis',
    generoMusical: 'Indie',
  },
  { id_musica: '12', nome: 'Halo', artista: 'Beyoncé', generoMusical: 'R&B' },
  {
    id_musica: '13',
    nome: 'Let It Be',
    artista: 'The Beatles',
    generoMusical: 'Rock',
  },
  {
    id_musica: '14',
    nome: 'Sultans of Swing',
    artista: 'Dire Straits',
    generoMusical: 'Rock',
  },
  {
    id_musica: '15',
    nome: 'Piano Man',
    artista: 'Billy Joel',
    generoMusical: 'Soft Rock',
  },
];

@Component({
  selector: 'app-musicas',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './musicas.component.html',
  styleUrl: './musicas.component.scss',
})
export class MusicasComponent implements AfterViewInit {
  colunasMostradas: string[] = ['nome', 'artista', 'generoMusical'];
  fonteDados = new MatTableDataSource<Musica>(MUSICAS_DADOS);

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    if (!this.fonteDados.paginator) {
      this.fonteDados.paginator = paginator;
    }
  }

  @ViewChild(MatSort) set matSort(sort: MatSort) {
    if (!this.fonteDados.sort) {
      this.fonteDados.sort = sort;
    }
  }

  ngAfterViewInit(): void {
    this.fonteDados.paginator = this.matPaginator;
    this.fonteDados.sort = this.matSort;
  }
}
