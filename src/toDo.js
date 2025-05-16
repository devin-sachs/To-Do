export class toDo{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate; 
        this.priority = priority;
    }

    getTitle(){
        return this.title;
    }

    setTitle(title){
        this.title = title;
    }

    getDesc(){
        return this.description;
    }

    setDesc(description){
        this.description = description;
    }

    getDueDate(){
        return this.dueDate;
    }

    setDueDate(dueDate){
        this.dueDate = dueDate;
    }

    getPriority(){
        return this.priority;
    }

    setPriority(priority){
        this.priority = priority
    }
}