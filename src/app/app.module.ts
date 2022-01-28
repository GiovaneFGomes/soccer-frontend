import { NgModule } from '@angular/core';
// O BrowserModule exporta a infraestrutura necessária para que a aplicação possa ser executado em um navegador.
// Quando tu cria um módulo com o Angular CLI, o CommonModule vem por padrão. Ele é quem tem as diretivas do Angular
// como o *ngFor e *ngIf. O BrowserModule reexporta o CommonModule, por isso conseguimos usar as diretivas mesmo
// sem importar aqui na root o CommonModule.
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from "./components/components.module";
import { WhiteDirective } from './directive/white.directive';

// O @NgModule é um decorator, assim como o @Component. Ou seja, vai adicionar mais funcionalidades a classe,
// acrescentando esses metadados (declarations, imports, providers e bootstrap).
@NgModule({
  // Aqui é onde ficam todos os components, directives e pipes que queremos utilizar nesse módulo.
  declarations: [
    AppComponent,
    WhiteDirective
  ],
  // Aqui é onde declaramos outros módulos (que contém outros components) que queremos utilizar dentro desse módulo.
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Esse é o módulo que criei para agrupar todos os components da minha aplicação
    ComponentsModule
  ],
  // Aqui é onde colocamos os serviços que vão ficar disponíveis para todos os components declarados nesse módulo.
  providers: [],
  // Só é no root module que tem esse metadado bootstrap, onde vai ser o responsável por fazer a inicialização
  // (bootstrapping) da aplicação. É aqui que definimos qual é o component(s) que queremos inicializar.
  // Nesse caso, é o AppComponent (<app-root>), onde também já foi inserida no <body> do index.html, sendo a página
  // padrão da aplicação.
  bootstrap: [AppComponent]
})
// Por convenção, AppModule é o módulo root da aplicação. É como se fosse o root do build.gradle em Java.
export class AppModule { }


// O que é modulo em Angular?
// Um módulo é um arquivo que ajuda a organizar a nossa aplicação. É nele que conseguimos agrupar components,
// directives e pipes, além de imports de outros módulos.

// Comando do Angular CLI para criar um módulo - ng g m nome-do-modulo
