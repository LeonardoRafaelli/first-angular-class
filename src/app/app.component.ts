import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Cria uma tag <app-root></app-root>
  templateUrl: './app.component.html', // Link do arquivo html criado
  styleUrls: ['./app.component.css'] // Link do arquivo css criado
})
// Exporta o AppComponent
export class AppComponent {
  title = 'first-angular-project';
}
