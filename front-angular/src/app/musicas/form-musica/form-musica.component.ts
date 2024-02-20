import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-musica',
  templateUrl: './form-musica.component.html',
  styleUrl: './form-musica.component.scss'
})
export class FormMusicaComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nome: [null],
      artista: [null],
      generoMusical: [null],
      duracao: [null],
      lancamento: [null]
    });
  }

  onSalvar() {

  }

  onCancelar() {

  }

}
