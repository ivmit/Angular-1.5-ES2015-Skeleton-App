/**
 *
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import './todo.scss';

/* @ngInject */
var Config = ($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state('todos', {
            url: '/todos',
            component: 'todo',
            resolve: {
                todoData: TodoService => TodoService.getTodos()
            }
        });
    $urlRouterProvider.otherwise('/');
};

export const TodoModule = angular.module('todo', [uiRouter])
    .component('todo', TodoComponent)
    .service('TodoService', TodoService)
    .config(Config)
    .name;
