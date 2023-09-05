import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() project: Project = new Project("ello", "", "", [], []);
  public galleryIndex: number = 0;

  @Output() clickedOutside: EventEmitter<void> = new EventEmitter<void>();

  public ChangeIndex(amount: number) {
    this.galleryIndex += amount;

    while (this.galleryIndex < 0) {
      this.galleryIndex += this.project.images.length;
    }

    this.galleryIndex %= this.project.images.length;
  }

  @HostListener("click", ['$event']) OnClick(event: MouseEvent) {
    this.clickedOutside.emit();
  }

}
