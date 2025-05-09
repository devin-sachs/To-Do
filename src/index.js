import "./styles.css";
import {Project} from "./project.js"
import {toDo} from "./toDo.js";

const defaultToDo = new toDo("my first To Do list", "write your to do items here", "10/10/24", "High", "dont forget to feed the fish" );

const defaultToDo1 = new toDo("1my first To Do list", "write your to do items here", "10/10/24", "High", "dont forget to feed the fish" );

const defaultToDo2 = new toDo("2my first To Do list", "write your to do items here", "10/10/24", "High", "dont forget to feed the fish" );

const defaultToDo3 = new toDo("3my first To Do list", "write your to do items here", "10/10/24", "High", "dont forget to feed the fish" );

const defaultToDo4 = new toDo("my first To Do list", "write your to do items here", "10/10/24", "High", "dont forget to feed the fish" );

const manyToDos = [defaultToDo,defaultToDo1,defaultToDo2,defaultToDo3,defaultToDo4]

 const defaultProject1 = new Project(manyToDos);

 const defaultProject = new Project(defaultToDo);

 console.log(defaultProject);
 console.log(defaultProject1);