export class TodoList{

    constructor (){
        this. loadToLocalStorage();
        /* this.todos = [] */  // we create array that will hold all the todo activities.
    }
    //metodos

    nuevoTodo( todo ){

        this.todos.push(todo);
        this.saveToLocalStorage();

    }

    eliminarTodo(id) {
         this.todos = this.todos.filter(todo => todo.id != id)
         this.saveToLocalStorage();

        
    }

    changeTodo(id){
        for ( const todo of this.todos){

         if(todo.id == id ){
             todo.completed = !todo.completed;
             this.saveToLocalStorage();
             break;
         }

        }

    }

    removeCompletedTodo(){
         this.todos = this.todos.filter(todo => !todo.completed)
         this.saveToLocalStorage();
       } 



    saveToLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));

    };

    loadToLocalStorage(){

      this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : this.todos = [];
 
       /*   if(localStorage.getItem('todo'){
            this.todos = JSON.parse(localStorage.getItem('todo'))
         }else{

                this.todos = [];

         })

    } */
 

}
}