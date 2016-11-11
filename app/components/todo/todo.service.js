/**
 * Created by imitrache on 11/11/2016.
 */

export default class TodoService {
    /* @ngInject */
    constructor($http){
        this.$http = $http;
    }

    getTodos(){
        return this.$http.get('mock.js').then(response => response.data);
    }
}