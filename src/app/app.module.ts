import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UpdateComponent } from './heroes/new/update/update.component';
import { RoutesComponent } from './heroes/new/routes/routes.component';
import { ImagesComponent } from './assets/images/images.component';
import { PathComponent } from './new/path/path.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    UpdateComponent,
    RoutesComponent,
    ImagesComponent,
    PathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
