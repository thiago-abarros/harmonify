package com.harmonify.backspring.dominio.dto;

import java.sql.Date;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RespostaDTO {

    private String nome;
    private String artista;
    private String generoMusical;
    private String duracao;
    private Date dataLancamento;
    private String foto;

}
