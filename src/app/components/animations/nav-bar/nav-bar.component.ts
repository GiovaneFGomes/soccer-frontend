import { Component, OnInit } from '@angular/core';

// @Component é um decorator, ou seja, adiciona mais funcionalidades a classe.
@Component({
  selector: 'app-nav-bar',                // Nome do component
  templateUrl: './nav-bar.component.html', // Documento para o HTML
  styleUrls: ['./nav-bar.component.scss']   // Documento para o CSS
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
