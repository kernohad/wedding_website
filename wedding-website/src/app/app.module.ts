import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { EventComponent } from './components/event/event.component';
import { RegistryComponent } from './components/registry/registry.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutUsComponent,
    RsvpComponent,
    EventComponent,
    RegistryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
