import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicLayoutComponent } from './dynamic-layout/dynamic-layout.component';
import { HorizontalLayoutComponent } from './horizontal-layout/horizontal-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicLayoutComponent,
    HorizontalLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
