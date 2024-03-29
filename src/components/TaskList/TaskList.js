import React, { useState } from "react";
import { styled } from "styled-components";
import { Modal } from "../../components/Modal/Modal";
import { useInput } from "../../hooks/useInput";

const ModalButton = styled.button`
color: #fff;
font-size: 20px;
`



export function TaskList({ list, tasks, title, dragTask, addTask, editTask, deleteTask }) {
  const description = useInput('');
  console.log('desc', description);
  const [id, setId] = useState(0);

  function toggleModal() {
    if (id) {
      setId(0);
      description.setValue("");
    } else {
      setId(Math.random())
    }
  };

  function handleDoubleClick(id) {
    return function () {
      setId(id);
      description.setValue(tasks.find(item => item.id === Number(id)).description)
    }
  }

  function createTask() {
    if (tasks.find(item => item.id === id)) {
      editTask({ id, description, taskListId: list.id })
    } else {
      addTask({ id, description, taskListId: list.id });
    }
    description.setValue("");
    setId(0);
  };

  function handleOnDrag(e, id) {
    e.dataTransfer.setData("id", id);
  }

  function handleOnDragOver(e) {
    e.preventDefault();
  }

  function handleOnDrop(e) {
    dragTask({ id: e.dataTransfer.getData("id"), taskListId: list.id });
  }

  function renderTasks(item) {
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
      {!!id && (
        <Modal onClose={toggleModal}>
          <input placeholder="description" value={description.value} onChange={description.onChange} />
          <button onClick={createTask} >{tasks.find(item => item.id === id) ? 'Edit' : 'Create'} task</button>
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