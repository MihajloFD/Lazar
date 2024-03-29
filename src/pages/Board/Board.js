import React from "react";
import { useSelector } from "react-redux";

import { TaskList } from "../../components/TaskList/TaskList";
import { setTasks } from "../../redux/actions/board/boardAction";
import { taskListsSelector, tasksSelector } from "../../redux/selectors/board/boardSelector";
import { useDispatch } from "react-redux";


export function Board() {
   const taskLists = useSelector(taskListsSelector);
   const tasks = useSelector(tasksSelector);


   const dispatch = useDispatch();

   const dragTask = ({ id, taskListId }) => {
      const task = tasks.find(item => item.id === Number(id))
      if (task.taskListId !== taskListId) {
         editTask({ ...task, taskListId })
      }
   }

   function addTask(task) {
      dispatch(setTasks([...tasks, task]))
   }
   function editTask(task) {
      const li = tasks.filter(item => item.id !== task.id)
      dispatch(setTasks([...li, task]));
   }
   function deleteTask(id) {
      const li = tasks.filter(item => item.id !== id)
      dispatch(setTasks(li));
   }

   function renderTaskList(list) {
      return <TaskList
         key={list.id}
         list={list}
         tasks={tasks.filter(task => task.taskListId === list.id)}
         addTask={addTask}
         editTask={editTask}
         deleteTask={deleteTask}
         dragTask={dragTask}
      />
   }

   return (
      <div style={{ display: "flex" }}>
         {taskLists.map(renderTaskList)}
      </div>
   )


};