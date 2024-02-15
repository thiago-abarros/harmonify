import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogoErroComponent } from './componentes/dialogo-erro/dialogo-erro.component';
import { AppMaterialModule } from './app-material/app-material.module';

@NgModule({
  declarations: [
    DialogoErroComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [DialogoErroComponent]
})
export class CompartilhadoModule {}
