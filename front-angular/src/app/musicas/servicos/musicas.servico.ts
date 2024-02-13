import { Injectable } from '@angular/core';
import { Musica } from '../modelos/musica';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  private readonly API = '../../../assets/musicas.json';

  constructor(private httpClient: HttpClient) { }

  listarMusicas() : Observable<Musica[]> {
    return this.httpClient.get<Musica[]>(this.API)
      .pipe(
        first(),
        delay(5000),
        tap(musicas => console.log(musicas))
      );
  }
}
