import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareButtonsComponent } from './share-buttons/share-buttons.component';
import { VideoShareComponent } from './video-share/video-share.component';

@NgModule({
  declarations: [
    AppComponent,
    ShareButtonsComponent,
    VideoShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
