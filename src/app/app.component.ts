import { Component, Input } from '@angular/core';
import { Project } from './models/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';

  @Input() projects: Project[] = [
    new Project(
      "Ballasite",
      "test",
      "test",
      ["cover", "cover"],
      ["test", "test"],
    ),
    new Project(
      "Ballasite",
      "test",
      "test",
      ["cover"],
      ["test"],
    ),
    new Project(
      "Ballasite",
      "test",
      "test",
      ["cover"],
      ["test"],
    ),
    new Project(
      "Ballasite",
      "test",
      "test",
      ["cover"],
      ["test"],
    ),
    new Project(
      "Ballasite",
      "test",
      "test",
      ["cover"],
      ["test"],
    ),
    new Project(
      "Ballasite",
      "test",
      "test",
      ["cover"],
      ["test"],
    ),
    new Project(
      "Ballasite",
      "test",
      "test",
      ["cover"],
      ["test", "test"],
    )

  ];

  public selectedProject: Project = new Project("", "", "", [], []);
  public modalVisible: boolean = false;

  public OpenModal(project: Project) {
    this.selectedProject = project;
    this.modalVisible = true;
  }

  public CloseModal() {
    this.modalVisible = false;
  }
}
