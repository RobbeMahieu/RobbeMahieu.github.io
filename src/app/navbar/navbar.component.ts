import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public title: string = "Robbe Mahieu // Game Developer"

  constructor() {
    this.title = (window.innerWidth > 768) ? "Robbe Mahieu // Game Developer" : "Robbe Mahieu";
  }
}
