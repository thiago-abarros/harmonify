package com.harmonify.backspring.dominio;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Date;
import lombok.Data;

@Entity
@Data
@Table(name = "musicas")
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

  @Column(nullable = false)
  private int duracaoSegundos;

  @Column(name = "data_de_lancamento", nullable = false)
  private Date lancamento;

  private byte[] foto;

  public Musica(String nome, String artista, String genero, int duracaoSegundos, Date lancamento,
      byte[] foto) {
    this.nome = nome;
    this.artista = artista;
    this.genero = genero;
    this.duracaoSegundos = duracaoSegundos;
    this.lancamento = lancamento;
    this.foto = foto;
  }
}
