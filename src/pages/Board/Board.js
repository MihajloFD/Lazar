import React from "react";
import { useSelector } from "react-redux";

import { TaskList } from "../../components/TaskList/TaskList";
import { setDone, setInProgress, setToDo } from "../../redux/actions/board/boardAction";
import { doneSelector, inProgressSelector, toDoSelector } from "../../redux/selectors/board/boardSelector";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch } from "react-redux";



export const Board = () => {
    const toDoList = useSelector(toDoSelector);
    const inProgressList = useSelector(inProgressSelector);
    const doneList = useSelector(doneSelector);
    const dispatch = useDispatch();
 return (
    <div style={{display : "flex"}}>
       <DndProvider backend={HTML5Backend}>
        <TaskList list={toDoList} createList={setToDo} title={"To do"}/>
        <TaskList list={inProgressList} createList={setInProgress} title={"In progress"}/>
        <TaskList list={doneList} createList={setDone} title={"Done"}/>
       </DndProvider>
    </div>
 )
    
 
};