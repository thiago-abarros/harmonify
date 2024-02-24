package com.harmonify.backspring.servico;

import com.harmonify.backspring.dominio.Musica;
import com.harmonify.backspring.dominio.dto.MusicaDTO;
import com.harmonify.backspring.dominio.dto.RespostaDTO;
import com.harmonify.backspring.repositorio.MusicaRepositorio;
import java.util.ArrayList;
import java.util.List;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MusicaServico {

  @Autowired
  MusicaRepositorio musicaRepositorio;

  public List<RespostaDTO> listarMusicas() {
    List<RespostaDTO> response = new ArrayList<>();
    List<Musica> musicas = musicaRepositorio.findAll();

    for (Musica musica : musicas) {
      String foto = Base64.encodeBase64String(musica.getFoto());
      RespostaDTO envelope = new RespostaDTO(musica.getNome(), musica.getArtista(), musica.getGenero(), musica.getDuracaoSegundos(), musica.getLancamento(), foto);
      response.add(envelope);
    }

    return response;
  }

  public void salvarMusica(MusicaDTO musicaDTO) {
    Musica musica = new Musica(musicaDTO);
    musicaRepositorio.save(musica);
  }
}
