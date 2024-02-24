import { Injectable } from '@angular/core';
import { Musica } from '../modelos/musica';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  private readonly API_SPRING = 'api/musicas';

  constructor(private httpClient: HttpClient) { }

  listarMusicas() : Observable<Musica[]> {
    return this.httpClient.get<Musica[]>(this.API_SPRING)
      .pipe(
        first(),
        delay(2000),
        tap(musicas => console.log(musicas))
      );
  }

  salvarMusica(musica: Musica) {
    console.log(musica);
    return this.httpClient.post<Musica>(this.API_SPRING, musica);
  }

}
