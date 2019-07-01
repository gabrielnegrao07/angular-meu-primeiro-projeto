import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from 'src/app/cursos/cursos.service';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  // aqui nós mostramos para o Angular quais são as declarações desse módulo aqui queremos expor para
  // outros módulos
  // nesse caso o Component CursoDetalheComponent não pode ser usado nos components acima,
  // pois ele não está declarado no export

  exports: [
    CursosComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
