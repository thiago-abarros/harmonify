package com.harmonify.backspring.controlador;

import com.harmonify.backspring.dominio.Musica;
import com.harmonify.backspring.dominio.dto.MusicaDTO;
import com.harmonify.backspring.servico.MusicaServico;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/musicas")
public class MusicaControlador {

  @Autowired
  MusicaServico musicaServico;

  @GetMapping("/listar")
  public List<MusicaDTO> listarMusicas() {
    return musicaServico.listarMusicas();
  }

  @PostMapping("/salvar")
  public void salvarMusica(@RequestBody MusicaDTO musicaDTO) {
    musicaServico.salvarMusica(musicaDTO);
  }
}
