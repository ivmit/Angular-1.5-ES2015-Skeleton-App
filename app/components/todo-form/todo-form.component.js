/**
 * This component fetches no state, it simply receive it, mutates the object via the controller logic and
 * pass it back to parent through property bindings.
 */
import template from './todo-form.html';

export const TodoFormComponent = {
    template,
    bindings: {
        todo: '<',
        onAddTodo: '&'
    },
    controller: class TodoFormComponent {
        /* @ngInject */
        constructor(EventEmitter){
            this.EventEmitter = EventEmitter;
        }
        $onChanges(changes){
            if(changes.todo){
                this.todo = Object.assign({}, this.todo);
            }
        }
        onSubmit(){
            if (!this.todo.title) return;
            this.onAddTodo(this.EventEmitter({todo: this.todo}));
        }

    }

};