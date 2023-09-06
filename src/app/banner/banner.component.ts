import { Component, Input } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Input() title: string = "Robbe Mahieu";
  @Input() subtitle: string = "Game Developer";
  @Input() paragraph: string = "Hello, I'm Robbe, A game dev student at Howest DAE. Here, you can find some of my best games and projects.";

  @Input() links: Link[] = [
    new Link("github", "https://github.com/RobbeMahieu"),
    new Link("itch", "https://mear.itch.io/"),
    new Link("linkedIn", "https://www.linkedin.com/in/robbe-mahieu-0346b4283/"),
  ];
}
