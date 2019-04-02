import { MasonryElement } from './masonry-element.directive';
import { MasonryWrapperComponent } from './masonty-wrapper.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [MasonryElement, MasonryWrapperComponent],
    exports: [MasonryElement, MasonryWrapperComponent]
})
export class MasonryModule { }
