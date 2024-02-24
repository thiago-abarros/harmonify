package com.harmonify.backspring.dominio;

import com.harmonify.backspring.dominio.dto.MusicaDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.sql.Date;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "Musica")
public class Musica {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id_musica")
  private Long id;

  @Column(length = 50, nullable = false)
  private String nome;

  @Column(length = 50, nullable = false)
  private String artista;

  @Column(length = 20, nullable = false)
  private String genero;

  @Column(name = "duracao_segundos", length = 5, nullable = false)
  private String duracaoSegundos;

  @Column(name = "data_de_lancamento", nullable = false)
  private Date lancamento;

  private byte[] foto;

  public Musica(MusicaDTO musicaDTO) {
    this.nome = musicaDTO.getNome();
    this.artista = musicaDTO.getArtista();
    this.genero = musicaDTO.getGeneroMusical();
    this.duracaoSegundos = musicaDTO.getDuracao();
    this.lancamento = musicaDTO.getDataLancamento();
    this.foto = musicaDTO.getFoto();
  }
}
