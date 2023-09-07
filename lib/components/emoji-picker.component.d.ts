import { EventEmitter, ElementRef, Renderer2 } from "@angular/core";
import { DIRECTIONS } from "../misc/picker-directions";
import { Subject } from "rxjs";
export declare class EmojiPickerComponent {
    private _renderer;
    private _el;
    selectionEmitter: EventEmitter<any>;
    pickerCloseEmitter: EventEmitter<any>;
    _lastHostMousedownEvent: any;
    _currentTarget: ElementRef;
    _currentDirection: DIRECTIONS;
    _windowResize: Subject<any>;
    _destroyed: Subject<boolean>;
    constructor(_renderer: Renderer2, _el: ElementRef<HTMLElement>);
    hide(): void;
    show(): void;
    setPosition(target: ElementRef, directionCode?: DIRECTIONS): void;
    onBackground(event: any): void;
    ngOnDestroy(): void;
}
