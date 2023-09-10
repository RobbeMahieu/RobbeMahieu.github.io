import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project = new Project("ello", "", "", [], []);
  @HostBinding('style.background-image') background = "";


  ngOnInit() {
    this.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--overlay-dark) 80%), url('/assets/images/projects/${this.project.title}/${this.project.images[0]}')`;
  }
}
