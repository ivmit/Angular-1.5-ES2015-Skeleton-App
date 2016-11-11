/**
 * This is the container reference for all reusable components
 */

import angular from 'angular';
import { TodoFormModule } from './todo-form/todo-form.module'; //statless dumb component
import { TodoModule } from './todo/todo.module'; //statefull smart component

export const ComponentsModule  = angular
    .module('app.components', [
        TodoFormModule,
        TodoModule
    ])
    .name;