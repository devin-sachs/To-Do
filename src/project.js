import {toDo} from "./toDo.js";
export class Project{

    constructor(name){
        this.name = name;
        this.toDos = [];
    }

    addToDo(task){
        if(!(task instanceof toDo)){
            throw new Error("Only instance of toDo can be added");
        }
        this.toDos.push(task);
    }

    removetoDo(title){
        this.toDos = throws.toDos.filter(task => task.title !== title);
    }

    getToDo(title){
        return this.toDos.find(task => task.title === title);
    }


}