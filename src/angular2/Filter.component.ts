import {Component, Output, EventEmitter} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

@Component({
    providers: [],
    directives: [MATERIAL_DIRECTIVES],
    selector: 'Filter',
    template: `
    <div layout="row" layout-align="space-between center">
     <button md-button md-no-ink class="md-primary" (click)="SetVisibilityFilter('SHOW_ALL')">ALL </button>
     <button md-button md-no-ink class="md-primary" (click)="SetVisibilityFilter('SHOW_ACTIVE')">ACTIVE </button>
     <button md-button md-no-ink class="md-primary" (click)="SetVisibilityFilter('SHOW_COMPLETED')">COMPLETED </button>
     </div>
    `
})

export class FilterComponent {
 @Output() emitter = new EventEmitter();   
 
 private SetVisibilityFilter(filter: string): void {
     this.emitter.emit(filter);
 }
}