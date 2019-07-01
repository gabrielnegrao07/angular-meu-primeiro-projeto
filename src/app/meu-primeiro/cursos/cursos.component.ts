import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/cursos/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  // private cursosService: CursosService;

  constructor(private cursosService: CursosService) {

    this.nomePortal = 'http://loiane.training';
    // this.cursosService = cursosService;

    //var servico = new CursosService();

    this.cursos = this.cursosService.getCursos();



   }

  ngOnInit() {
  }

}
