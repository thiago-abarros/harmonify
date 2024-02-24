package com.harmonify.backspring.dominio.enums;

import lombok.Getter;

@Getter
public enum GENERO_MUSICAL {
  COUNTRY("Country"),
  DANCE("Dance"),
  ELETRONICA("Eletrônica"),
  FORRO("Forró"),
  HIP_HOP("Hip Hop"),
  INSTRUMENTAL("Instrumental"),
  JAZZ("Jazz"),
  POP("Pop"),
  ROCK("Rock"),
  R_B("R&B");

  private final String valor;

  GENERO_MUSICAL(String valor) {
    this.valor = valor;
  }

}
