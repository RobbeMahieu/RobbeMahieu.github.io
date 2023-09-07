import { Component, Input, OnInit } from '@angular/core';
import { Project } from './models/project';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Portfolio';

  @Input() projects: Project[] = [];

  public selectedProject: Project = new Project("", "", "", [], []);
  public modalVisible: boolean = false;

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.projects = await firstValueFrom(this.LoadProjects());
  }

  public OpenModal(project: Project) {
    this.selectedProject = project;
    this.modalVisible = true;
  }

  public CloseModal() {
    this.modalVisible = false;
  }

  private LoadProjects() {
    return this.http.get<Project[]>("/assets/projects.json");
  }
}
