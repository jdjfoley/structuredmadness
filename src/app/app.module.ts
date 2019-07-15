import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './views/shared/nav/nav.component';
import { ServicesComponent } from './views/services/services.component';
import { StructuredMadnessComponent } from './views/structured-madness/structured-madness.component';
import { BlogCardComponent } from './views/structured-madness/blog-card/blog-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ServicesComponent,
    StructuredMadnessComponent,
    BlogCardComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
