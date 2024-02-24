package com.harmonify.backspring.dominio.dto;

import com.harmonify.backspring.dominio.Musica;
import java.sql.Date;

public record MusicaDTO(String nome, String artista, String generoMusical, String duracao,
                        Date lancamento, byte[] arquivo) {

  public MusicaDTO(Musica musica) {
    this(musica.getNome(), musica.getArtista(), musica.getGenero(), musica.getDuracaoSegundos(),
        musica.getLancamento(), musica.getFoto());
  }
}
