export class Project{
    constructor(project){
        for (let toDo in project){
            this[toDo] = project[toDo];
        };
    }
}