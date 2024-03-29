import React from "react";
import { useSelector } from "react-redux";

import { TaskList } from "../../components/TaskList/TaskList";
import { setTasks, setTaskId } from "../../redux/actions/board/boardAction";
import { taskIdSelector, taskListsSelector, tasksSelector } from "../../redux/selectors/board/boardSelector";
import { useDispatch } from "react-redux";


export const Board = () => {
   const taskLists = useSelector(taskListsSelector);
   const tasks = useSelector(tasksSelector);
   const taskId = useSelector(taskIdSelector);



   const dispatch = useDispatch();

   const dragTask = ({ id, taskListId }) => {
      const task = tasks.find(item => item.id === Number(id))
      if (task.taskListId !== taskListId) {
         editTask({ ...task, taskListId })
      }
   }
   const handleSetTaskId = (id) => {
      dispatch(setTaskId(id))
   }
   const addTask = (task) => {
      dispatch(setTasks([...tasks, task]))
   }
   const editTask = (task) => {
      const li = tasks.filter(item => item.id !== task.id)
      dispatch(setTasks([...li, task]));
   }
   const deleteTask =(id) => {
      const li = tasks.filter(item => item.id !== id)
      dispatch(setTasks(li));
   }

   const renderTaskList= (list) => {
      return (
      <TaskList
         key={list.id}
         list={list}
         tasks={tasks.filter(task => task.taskListId === list.id)}
         addTask={addTask}
         editTask={editTask}
         deleteTask={deleteTask}
         dragTask={dragTask}
         handleSetTaskId={handleSetTaskId}
         taskId={taskId}
      />)
   }

   return (
      <div style={{ display: "flex" }}>
         {taskLists.map(renderTaskList)}
      </div>
   )


};