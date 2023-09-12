import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private appService: AppService) { }
  themes = [
    {
      id: 'lara-light-blue',
      label: 'Lara Light Blue'
    },
    {
      id: 'luna-green',
      label: 'Luna Green'
    },
    {
      id: 'bootstrap4-dark-blue',
      label: 'Bootstrap 4 Dark Blue'
    }
  ];

  selectedTheme: { id: string; label: string } = this.themes[0];

  changeTheme(themeId: string) {
    this.appService.switchTheme(themeId);
  }
}
