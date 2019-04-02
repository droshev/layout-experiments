import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicLayoutComponent } from './dynamic-layout/dynamic-layout.component';
import { HorizontalLayoutComponent } from './horizontal-layout/horizontal-layout.component';
import { MasonryModule } from './masonry-ng/masonry.module';
import { MasonryElement } from './masonry-ng/masonry-element.directive';
import { MasonryWrapperComponent } from './masonry-ng/masonty-wrapper.component'


@NgModule({
  declarations: [
    AppComponent,
    DynamicLayoutComponent,
    HorizontalLayoutComponent,
    MasonryElement,
    MasonryWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //MasonryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
