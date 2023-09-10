import { Component, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';
import { Project } from '../models/project';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnDestroy {
  @Input() project: Project = new Project("ello", "", "", [], []);
  public galleryIndex: number = 0;

  private autoIncrementObservable: Subscription = interval(5000).subscribe(() => this.ChangeIndex(1, true));

  @Output() clickedOutside: EventEmitter<void> = new EventEmitter<void>();

  ngOnDestroy() {
    this.autoIncrementObservable.unsubscribe();
  }

  public ChangeIndex(amount: number, isAutoUpdate: boolean = false) {
    this.galleryIndex += amount;

    while (this.galleryIndex < 0) {
      this.galleryIndex += this.project.images.length;
    }

    this.galleryIndex %= this.project.images.length;

    // Restart timer if not automatic
    if (!isAutoUpdate) {
      this.autoIncrementObservable.unsubscribe();
      this.autoIncrementObservable = interval(5000).subscribe(() => this.ChangeIndex(1, true));
    }
  }

  @HostListener("click", ['$event']) OnClick(event: MouseEvent) {
    this.clickedOutside.emit();
  }

}
