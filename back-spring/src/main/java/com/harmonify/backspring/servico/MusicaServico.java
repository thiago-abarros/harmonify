package com.harmonify.backspring.servico;

import com.harmonify.backspring.dominio.Musica;
import com.harmonify.backspring.dominio.dto.MusicaDTO;
import com.harmonify.backspring.repositorio.MusicaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MusicaServico {

  @Autowired
  MusicaRepositorio musicaRepositorio;

  public void salvar(MusicaDTO musicaDTO) {
    Musica musica = new Musica();
    musica.setNome(musicaDTO.getNome());
    musica.setArtista(musicaDTO.getArtista());
    musica.setGenero(musicaDTO.getGeneroMusical());
    musica.setDuracaoSegundos(validarDuracao(musicaDTO.getDuracao()));
    musica.setLancamento(musicaDTO.getLancamento());
    musica.setFoto(musicaDTO.getArquivo());
    musicaRepositorio.save(musica);
  }

  public int validarDuracao(String duracao) {
    int minutos = Integer.parseInt(duracao.substring(0,2));
    int segundos = Integer.parseInt(duracao.substring(3));
    return (minutos * 60) + segundos;
  }
}
