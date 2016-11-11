/**
 * Low Level Module
 */
import angular from 'angular';
import { TodoFormComponent } from './todo-form.component';
import './todo-form.scss';

export const TodoFormModule = angular.module('todoForm', [TodoFormComponent])
    .component('todoForm', TodoFormComponent)
    .value('EventEmitter', payload => ({ $event: payload }))
    .name;

