import React from "react";
import { styled } from "styled-components";
import { Modal } from "../../components/Modal/Modal";
import { useInput } from "../../hooks/useInput";

const ModalButton = styled.button`
color: #fff;
font-size: 20px;
`



export const TaskList = ({ list, tasks, handleSetTaskId, dragTask, addTask, editTask, deleteTask, taskId }) => {
  
  console.log('list', list)
  const description = useInput('');

  const toggleModal = () => {
    if (taskId) {
      handleSetTaskId(0);
      description.setValue('');
    } else {
      handleSetTaskId(Math.random())
    }
  };

  const handleDoubleClick = (id) => () => {
      handleSetTaskId(id);
      description.setValue(tasks.find(item => item.id === Number(id)).description)
  }

  const createTask = (listId) => () =>  {
    if (tasks.find(item => item.id === taskId)) {
      editTask({ id: taskId, description: description.value, taskListId: listId })
    } else {
      addTask({ id: taskId, description: description.value, taskListId: listId });
    }
    description.setValue('');
    handleSetTaskId(0);
  };

  const handleOnDrag = (e, id) => {
    e.dataTransfer.setData("id", id);
  }

  const handleOnDragOver = (e) => {
    e.preventDefault();
  }

  const handleOnDrop = (e) => {
    dragTask({ id: e.dataTransfer.getData("id"), taskListId: list.id });
  }

  const renderTasks = (item) => {
    return (
      <div
        onDoubleClick={handleDoubleClick(item.id)}
        draggable
        onDragStart={e =>
          handleOnDrag(e, item.id)
        }
        key={item.id}
        style={{ background: "green", marginTop: "10px", display: "flex", justifyContent: "space-between" }}>
        {item.description}
        <button onClick={() => deleteTask(item.id)}>X</button>
      </div>
    )
  }


  return (
    <>
      {!!taskId && (
        <Modal onClose={toggleModal}>
          <input placeholder="description" value={description.value} onChange={description.onChange} />
          <button onClick={createTask(list.id)} >{tasks.find(item => item.id === taskId) ? 'Edit' : 'Create'} task</button>
        </Modal>
      )}
      <div style={{ padding: "20px", margin: "10px", background: "#1A92DB" }}>
        <div>
          <h3>{list.listName}</h3>
          <ModalButton onClick={toggleModal}>+</ModalButton>
          <div>({tasks.length})</div>
        </div>
        <div
          onDragOver={handleOnDragOver}
          onDrop={handleOnDrop}
          style={{ background: "#BEE3F6", marginTop: "10px", minHeight: " 400px", minWidth: " 200px" }}
        >
          {tasks.map(renderTasks)}
        </div>
      </div>
    </>
  )

};