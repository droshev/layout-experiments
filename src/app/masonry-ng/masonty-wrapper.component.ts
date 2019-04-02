import { Component, ElementRef, Output, EventEmitter, OnInit, OnDestroy } from "@angular/core";


var masonry = require('masonry-layout');

@Component({
    selector: 'masonry, [masonry]',
    template: '<ng-content></ng-content>'
})
export class MasonryWrapperComponent implements OnInit, OnDestroy {

    options: any = {};
    constructor(private element: ElementRef) {
        console.log("----1");

    }

    public masonry: any;

    @Output() layoutComplete: EventEmitter<any[]> = new EventEmitter<any[]>();
    @Output() removeComplete: EventEmitter<any[]> = new EventEmitter<any[]>();

    ngOnInit(): void {
        console.log("----2");
        this.options.itemSelector = 'masonry, [masonry]';

        if (this.element.nativeElement.tagName === 'MASONRY') {
            this.element.nativeElement.style.display = 'block';
        }

        this.masonry = new masonry(this.element.nativeElement, this.options);
        console.log('masonry initialized: ', this.masonry);

        this.masonry.on('layoutComplete', (items: any) => this.layoutComplete.emit(items));

        this.masonry.on('removeComplete', (items: any) => this.removeComplete.emit(items));
    }


    ngOnDestroy(): void {
        if (this.masonry) {
            this.masonry.destroy();
        }
    }

    public layout() {

        console.log("----4");
        setTimeout(() => this.masonry.layout());
    }

    public add(element: HTMLElement) {
        console.log("----3");
        let initialItem = false;

        if (this.masonry.items.length === 0) {
            initialItem = true;
        }

        this.masonry.appended(element);

        if (initialItem) {
            this.layout();
        }
    }

    public remove(element: HTMLElement) {
        this.masonry.remove(element);
        this.layout();
    }
}

