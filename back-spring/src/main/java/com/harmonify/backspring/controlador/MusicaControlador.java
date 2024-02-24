package com.harmonify.backspring.controlador;

import com.harmonify.backspring.dominio.dto.MusicaDTO;
import com.harmonify.backspring.dominio.dto.RespostaDTO;
import com.harmonify.backspring.servico.MusicaServico;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/musicas")
public class MusicaControlador {

  private final MusicaServico musicaServico;

  public MusicaControlador(MusicaServico musicaServico) {
    this.musicaServico = musicaServico;
  }

  @GetMapping
  public List<RespostaDTO> listarMusicas() {
    return musicaServico.listarMusicas();
  }

  @PostMapping
  public void salvarMusica(@RequestBody MusicaDTO musicaDTO) {
    musicaServico.salvarMusica(musicaDTO);
  }
}
