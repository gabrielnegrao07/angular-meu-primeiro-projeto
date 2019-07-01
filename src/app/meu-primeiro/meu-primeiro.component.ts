import { Component } from '@angular/core';

//Nosso decorator, recebe metadados. Angular se baseia em boas praticas da web como web components que permitem
//que criemos HTML customizados. O Seletor seria o nome da tag HTML que queremos criar para depois utilizar esse
//componente

@Component({
  selector: 'meu-primeiro-component',
  template: `
    <p>Meu primeiro component com Angular!</p>
  `
})
export class MeuPrimeiroComponent { }
