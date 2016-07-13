/**
 * @class AppComponent
 */

import {Component} from '@angular/core';

import {AddTodoComponent} from './components/addtodo.component/addtodo.component';
import {VisibleTodoListComponent} from './components/visibletodolist.component/visibletodolist.component';
import {AppTitleComponent} from './components/apptitle.component/apptitle.component';
import {FilterComponent} from './components/filter.component/filter.component';

@Component({
  directives: [AddTodoComponent,
               VisibleTodoListComponent,
               AppTitleComponent,
               FilterComponent],
  providers: [],
  selector: 'root',
  template: require('./app.component.html'),
})

export class AppComponent {
}
