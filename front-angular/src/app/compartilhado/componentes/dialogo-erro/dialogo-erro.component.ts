import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-erro',
  templateUrl: './dialogo-erro.component.html',
  styleUrl: './dialogo-erro.component.scss'
})
export class DialogoErroComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public dadosErro: string) {
  }
}
