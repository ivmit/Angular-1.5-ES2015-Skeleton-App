/**
 * Low Level Module
 */
import angular from 'angular';
import { TodoListComponent } from './to-do-list.component';
import './to-do-list.scss';

/* @ngInject */
let Configure = ($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state('todolist', {
            url: '/todolist',
            component: 'todolist'
        });
    $urlRouterProvider.otherwise('/');
};

export const ToDoListModule = angular
    .module('todolist', [
        TodoListComponent
    ])
    .component('todolist', TodoListComponent)
    .config(Configure)
    .name;

