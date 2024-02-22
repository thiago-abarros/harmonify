package com.harmonify.backspring.servico;

import com.harmonify.backspring.dominio.Musica;
import com.harmonify.backspring.dominio.dto.MusicaDTO;
import com.harmonify.backspring.repositorio.MusicaRepositorio;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MusicaServico {

  @Autowired
  MusicaRepositorio musicaRepositorio;

  public List<MusicaDTO> listarMusicas() {
    List<MusicaDTO> response = new ArrayList<>();
    List<Musica> musicas = musicaRepositorio.findAll();

    for (Musica musica : musicas) {
      int minutos = musica.getDuracaoSegundos() / 60;
      int segundos = musica.getDuracaoSegundos() % 60;
      String duracao = String.format("%02d:%02d", minutos, segundos);

      MusicaDTO envelope = new MusicaDTO(musica.getNome(), musica.getArtista(), musica.getGenero(), duracao, musica.getLancamento(), musica.getFoto());
      response.add(envelope);
    }

    return response;
  }

  public void salvarMusica(MusicaDTO musicaDTO) {
    Musica musica = new Musica(musicaDTO.getNome(), musicaDTO.getArtista(), musicaDTO.getGeneroMusical(), validarDuracao(musicaDTO.getDuracao()), musicaDTO.getLancamento(), musicaDTO.getArquivo());
    musicaRepositorio.save(musica);
  }

  public int validarDuracao(String duracao) {
    int minutos = Integer.parseInt(duracao.substring(0,2));
    int segundos = Integer.parseInt(duracao.substring(3));
    return (minutos * 60) + segundos;
  }
}
