/**
 * Created by imitrache on 11/10/2016.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {AppComponent} from './app.component';

export const AppModule = angular
    .module('app', [
        uiRouter
    ])
    .component('app', AppComponent)
    .name;