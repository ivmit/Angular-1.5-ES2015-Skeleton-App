/**
 * Created by imitrache on 11/11/2016.
 */
import template from './todo.html';

export const TodoComponent = {
    template,
    controller: class TodoComponent {
        /* @ngInject */
        constructor(TodoService){
            this.todoService = TodoService;
        }
        $onInit(){
            this.newTodo = {
                title: '',
                selected: false,
                description: ''
            };
            this.todos = [];
            this.todoService.getTodos().then(response => this.todos = response);
        }
        addTodo({todo}){
            if(!todo) return;
            this.todos.unshift(todo);
            this.newTodo = {
                title: '',
                selected: false,
                description: ''
            }
        }

    }
};