/**
 * This is the container reference for all reusable components
 */

import angular from 'angular';
import { ToDoListModule } from './to-do-list/to-do-list.module';

export const ComponentsModule  = angular
    .module('app.components', [
        ToDoListModule
    ])
    .name;