import React from "react";
import { useSelector } from "react-redux";

import { TaskList } from "../../components/TaskList/TaskList";
import { setDone, setInProgress, setToDo } from "../../redux/actions/board/boardAction";
import { doneSelector, inProgressSelector, taskListsSelector, tasksSelector, toDoSelector } from "../../redux/selectors/board/boardSelector";
import { useDispatch } from "react-redux";


export const Board = () => {
   const toDoList = useSelector(toDoSelector);
   const inProgressList = useSelector(inProgressSelector);
   const doneList = useSelector(doneSelector);
   const taskLists = useSelector(taskListsSelector);
   const tasks = useSelector(tasksSelector);


   const dispatch = useDispatch();
   const lists = {
      'To do': { listName: 'To do', list: toDoList, methode: setToDo },
      'In progress': { listName: 'In progress', list: inProgressList, methode: setInProgress },
      'Done': { listName: 'Done', list: doneList, methode: setDone }
   }

   const dragList = ({ id, currentListId, prevListId }) => {
      console.log('id, currentListId, prevListId', id, currentListId, prevListId)

      if (lists[currentListId]) {
         const cuEl = lists[prevListId].list.find(item => item.id === Number(id))
         const cuLi = [...lists[currentListId].list, cuEl];
         dispatch(lists[currentListId].methode(cuLi))
      }
      if (lists[prevListId]) {
         const culill = lists[prevListId].list.filter(item => item.id !== Number(id))
         dispatch(lists[prevListId].methode(culill));
      }
   }

   function renderTaskList(list) {
            return <TaskList key={list.id} list={list} tasks={tasks.filter(task => task.taskListId === list.id)} />
   }

   return (
      <div style={{ display: "flex" }}>
         {taskLists.map(renderTaskList)}
            {/* <TaskList list={toDoList} createList={setToDo} title={"To do"} dragList={dragList} />
            <TaskList list={inProgressList} createList={setInProgress} title={"In progress"} dragList={dragList} />
            <TaskList list={doneList} createList={setDone} title={"Done"} dragList={dragList} /> */}
      </div>
   )


};