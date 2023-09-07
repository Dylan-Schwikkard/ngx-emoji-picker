import { __decorate, __metadata } from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
var EmojiButtonComponent = /** @class */ (function () {
    function EmojiButtonComponent() {
        this.selectionEmitter = new EventEmitter();
    }
    EmojiButtonComponent.prototype.ngOnChanges = function () { };
    __decorate([
        Input('emoji'),
        __metadata("design:type", Object)
    ], EmojiButtonComponent.prototype, "emoji", void 0);
    __decorate([
        Input('dataToEmit'),
        __metadata("design:type", Object)
    ], EmojiButtonComponent.prototype, "dataToEmit", void 0);
    __decorate([
        Input('options'),
        __metadata("design:type", Object)
    ], EmojiButtonComponent.prototype, "options", void 0);
    __decorate([
        Input('fitzpatrick'),
        __metadata("design:type", Object)
    ], EmojiButtonComponent.prototype, "fitzpatrick", void 0);
    __decorate([
        Output('selection'),
        __metadata("design:type", EventEmitter)
    ], EmojiButtonComponent.prototype, "selectionEmitter", void 0);
    EmojiButtonComponent = __decorate([
        Component({
            selector: 'emoji-button',
            template: "\n    <button\n      class=\"emoji-button\" \n      (click)=\"selectionEmitter.emit(dataToEmit || emoji)\" [innerHTML]=\"emoji[0] | emojiFallback\">\n    </button>\n  ",
            styles: [":host{display:inline-block}.emoji-button{padding:0;border:none;outline:0;background:0 0;width:34px;height:34px;border-radius:3px;font-size:24px;line-height:1.1;cursor:pointer;transition:.2s}.emoji-button:focus,.emoji-button:hover{background:#f1f1f1;border-color:#f1f1f1}.emoji-button ::ng-deep img{width:20px}"]
        }),
        __metadata("design:paramtypes", [])
    ], EmojiButtonComponent);
    return EmojiButtonComponent;
}());
export { EmojiButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbW9qaS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lbW9qaS1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBWXRFO0lBUUU7UUFGcUIscUJBQWdCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUE7SUFFOUQsQ0FBQztJQUVoQiwwQ0FBVyxHQUFYLGNBQWUsQ0FBQztJQVRBO1FBQWYsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7dURBQU07SUFDQTtRQUFwQixLQUFLLENBQUMsWUFBWSxDQUFDOzs0REFBVztJQUNiO1FBQWpCLEtBQUssQ0FBQyxTQUFTLENBQUM7O3lEQUFRO0lBQ0g7UUFBckIsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7NkRBQVk7SUFFWjtRQUFwQixNQUFNLENBQUMsV0FBVyxDQUFDO2tDQUFtQixZQUFZO2tFQUEwQjtJQU5sRSxvQkFBb0I7UUFWaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFFeEIsUUFBUSxFQUFFLHlLQUtUOztTQUNGLENBQUM7O09BQ1csb0JBQW9CLENBV2hDO0lBQUQsMkJBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vtb2ppLWJ1dHRvbicsXG4gIHN0eWxlVXJsczogWycuLi9zdHlsZXMvZW1vamktYnV0dG9uLnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImVtb2ppLWJ1dHRvblwiIFxuICAgICAgKGNsaWNrKT1cInNlbGVjdGlvbkVtaXR0ZXIuZW1pdChkYXRhVG9FbWl0IHx8IGVtb2ppKVwiIFtpbm5lckhUTUxdPVwiZW1vamlbMF0gfCBlbW9qaUZhbGxiYWNrXCI+XG4gICAgPC9idXR0b24+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRW1vamlCdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoJ2Vtb2ppJykgZW1vamlcbiAgQElucHV0KCdkYXRhVG9FbWl0JykgZGF0YVRvRW1pdFxuICBASW5wdXQoJ29wdGlvbnMnKSBvcHRpb25zXG4gIEBJbnB1dCgnZml0enBhdHJpY2snKSBmaXR6cGF0cmlja1xuXG4gIEBPdXRwdXQoJ3NlbGVjdGlvbicpIHNlbGVjdGlvbkVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCkge31cbn1cbiJdfQ==