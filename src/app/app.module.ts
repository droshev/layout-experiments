import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicLayoutComponent } from './dynamic-layout/dynamic-layout.component';
import { HorizontalLayoutComponent } from './horizontal-layout/horizontal-layout.component';
import { MasonryModule } from './masonry-ng/masonry.module';


@NgModule({
  declarations: [
    AppComponent,
    DynamicLayoutComponent,
    HorizontalLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasonryModule
  ],
  providers: [MasonryModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
