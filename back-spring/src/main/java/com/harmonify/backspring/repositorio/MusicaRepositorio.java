package com.harmonify.backspring.repositorio;

import com.harmonify.backspring.dominio.Musica;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MusicaRepositorio extends JpaRepository<Musica,Long> {

}
