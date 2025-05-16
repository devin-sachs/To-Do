import "./styles.css";
import {Project} from "./project.js"
import {toDo} from "./toDo.js";

function createToDo(title, desc, dueDate, priority){
    return new toDo(title, desc, dueDate, priority);
}

function createProject(name){
    return new Project(name);
}

function mainApplicationLogic(){
    const defaultToDo =  createToDo("my first To Do list", "write your to do items here", "10/10/24", "High");
    const defaultToDo1 = createToDo("1my first To Do list", "write your to do items here", "10/10/24", "High" );
    const defaultToDo2 = createToDo("2my first To Do list", "write your to do items here", "10/10/24", "High");
    const defaultToDo3 = createToDo("3my first To Do list", "write your to do items here", "10/10/24", "High");
    const defaultToDo4 = createToDo("my first To Do list", "write your to do items here", "10/10/24", "High");

    //create default projects

    const defaultProject = createProject("Project 1");
    defaultProject.addToDo(defaultToDo);

    const defaultProject1 = createProject("Project 2");
    const manyToDos = [defaultToDo,defaultToDo1,defaultToDo2,defaultToDo3,defaultToDo4];
    manyToDos.forEach(toDo => defaultProject1.addToDo(toDo));

    console.log('Project 1', defaultProject);
    console.log('Project 2',  defaultProject1);


    //add to do to project 2 
    const newToDo1 = createToDo("my new To Do list", "write your to do items here", "10/11/24", "low");
    defaultProject1.addToDo(newToDo1);

    console.log('Project 2',  defaultProject1);


    //test api for changing toDo 
    defaultToDo1.setTitle("newTitle-changed");
    console.log("Updated title of defaultToDo1:", defaultToDo1.getTitle());
}

mainApplicationLogic();