import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { MusicasService } from './../servicos/musicas.servico';

@Component({
  selector: 'app-form-musica',
  templateUrl: './form-musica.component.html',
  styleUrl: './form-musica.component.scss'
})
export class FormMusicaComponent {

  form: FormGroup;
  nomeArquivoSelecionado: string | null = null;

  constructor(private formBuilder: FormBuilder, private service: MusicasService,
    private router: Router) {
    this.form = this.formBuilder.group({
      nome: [null],
      artista: [null],
      generoMusical: [null],
      duracao: [null],
      lancamento: [null],
      arquivo: [null]
    });
  }

  onSalvar() {
    console.log(this.form.value)
    this.service.salvarMusica(this.form.value).subscribe(_r => this.router.navigate(['/musicas']));
  }

  onCancelar() {
    this.router.navigate(['/musicas']);
  }

  onArquivoSelecionado(event: any) {
    const arquivoSelecionado = event.target.files[0];

    if (arquivoSelecionado) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) {
          const fileContentArrayBuffer = e.target.result as ArrayBuffer;

          const byteArray = new Uint8Array(fileContentArrayBuffer);

          this.form.patchValue({
            arquivo: Array.from(byteArray),
          });

          this.nomeArquivoSelecionado = arquivoSelecionado.name;
        }
      };

      reader.readAsArrayBuffer(arquivoSelecionado);
    }
  }

}
