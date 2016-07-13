import {Component} from '@angular/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material';

import {FormDataService} from '../.././services/formdata.service';

@Component({
    providers: [],
    directives: [MATERIAL_DIRECTIVES],
    selector: 'Filter',
    template: require('./filter.component.html'),
})

export class FilterComponent {
  private formDataService: FormDataService;

  constructor(formDataService: FormDataService) {
    this.formDataService = formDataService;
  }

 private setVisibilityFilter(filter: string): void {
     this.formDataService.getVisibilityFilterDispatcher().next(filter);
 }
}
