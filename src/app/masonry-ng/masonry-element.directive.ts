
import {
    Directive,
    ElementRef,
    AfterViewInit,
    OnDestroy,
    Inject,
    forwardRef
} from '@angular/core';

import { MasonryWrapperComponent } from './masonty-wrapper.component';


@Directive({
    selector: 'mansonry-element'
})
export class MasonryElement implements AfterViewInit, OnDestroy {
    constructor(private element: ElementRef, @Inject(forwardRef(() => MasonryWrapperComponent)) private _parent: MasonryWrapperComponent) {
        //console.log(this.element)
    }


    ngAfterViewInit(): void {
        this.watchForChanges();
    }

    watchForChanges(): void {
        const mutationObserver = (window as any).MutationObserver || (window as any).WebKitMutationObserver;
        //console.log(mutationObserver);

        if (mutationObserver) {
            //console.log("111");
            let observer = new MutationObserver((mutations, element) =>
                this.updateLayout()
            );

            observer.observe(this.element.nativeElement, {
                subtree: true,
                childList: true
            });
        }


    }

    ngOnDestroy(): void {
        this.destroy();
    }

    destroy() {
        this._parent.remove(this.element.nativeElement);
    }

    updateLayout() {
        this._parent.layout();
        console.log("mutation observed: IMPL");
    }
}