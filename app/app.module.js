/**
 * Root Module of the application. Further imports of submodels are made to include all components relevant for the application
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import { ComponentsModule } from './components/components.module';
//import { CommonModule } from './common/common.module';
import './app.scss';

export const app = angular
    .module('app', [
        uiRouter,
        ComponentsModule
        //CommonModule
    ])
    .component('app', AppComponent)
    .name;