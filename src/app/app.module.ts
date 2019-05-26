import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiHeaderComponent } from './components/ui-header/ui-header.component';
import { UiFooterComponent } from './components/ui-footer/ui-footer.component';
import { AkshharComponent } from './components/akshhar/akshhar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UiHeaderComponent,
    UiFooterComponent,
    AkshharComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
