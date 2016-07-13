/**
 * @class AppComponent
 */

import {Component} from '@angular/core';

import {AddTodoComponent} from './components/addtodo.component/addtodo.component';
import {VisibleTodoListComponent} from './components/visibletodolist.component/visibletodolist.component';

@Component({
  directives: [AddTodoComponent,
               VisibleTodoListComponent
              ],
  providers: [],
  selector: 'root',
  template: require('./app.component.html'),
})

export class AppComponent {
}
