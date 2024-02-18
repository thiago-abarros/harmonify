import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogoErroComponent } from './componentes/dialogo-erro/dialogo-erro.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { CategoriaPipe } from './pipes/categoria.pipe';

@NgModule({
  declarations: [
    DialogoErroComponent,
    CategoriaPipe
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    DialogoErroComponent,
    CategoriaPipe
  ]
})
export class CompartilhadoModule {}
