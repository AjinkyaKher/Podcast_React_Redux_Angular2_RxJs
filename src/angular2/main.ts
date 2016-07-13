/**
 * main entry point
 */

import 'core-js/es6';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from '@angular/platform-browser-dynamic';

import {AppComponent} from './app.component';
import {FormDataService} from './services/formdata.service';

bootstrap(AppComponent, [FormDataService]);
