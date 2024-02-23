package com.harmonify.backspring.servico;

import com.harmonify.backspring.dominio.Musica;
import com.harmonify.backspring.dominio.dto.MusicaDTO;
import com.harmonify.backspring.repositorio.MusicaRepositorio;
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
      MusicaDTO envelope = new MusicaDTO(musica.getNome(), musica.getArtista(), musica.getGenero(), musica.getDuracaoSegundos(), musica.getLancamento(), musica.getFoto());
      response.add(envelope);
    }

    return response;
  }

  public void salvarMusica(MusicaDTO musicaDTO) {
    Musica musica = new Musica(musicaDTO);
    musicaRepositorio.save(musica);
  }
}
