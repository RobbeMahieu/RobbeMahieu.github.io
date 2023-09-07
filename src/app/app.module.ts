import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ModalComponent } from './modal/modal.component';
import { HttpClientModule } from '@angular/common/http';

// Build command: ng deploy --base-href=/RobbeMahieu.github.io/ --no-silent
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ProjectCardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
