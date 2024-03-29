import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { Modal } from "../../components/Modal/Modal";

const ModalButton = styled.button`
color: #fff;
font-size: 20px;
`



export const TaskList = ({ list, tasks, createList, title, dragList }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (id) {
      setId(0);
      setDescription("");
    }
  };

  const handleDoubleClick = (id) => () => {
    setId(id);
    toggleModal();
    setDescription(list.find(item => item.id === Number(id)).description)
  };

  const createTask = () => {
    if (id) {
      const li = [...list].filter(item => item.id !== id);
      dispatch(createList([...li, { id: id, description }]));
    } else {
      dispatch(createList([...list, { id: Math.random(), description }]));
    }
    setDescription("");
    toggleModal();
    setId(0);
  };

  const deleteTask = (id) => {
    dispatch(createList(list.filter(item => item.id !== id)))
  };
  const handleOnDrag = (e, id, title) => {
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("listID", title);
  }
  function handleOnDragOver(e) {
    e.preventDefault();
  }
  function handleOnDrop(e) {
    if (title === e.dataTransfer.getData("listID")) {
      return
    }
    dragList({ id: e.dataTransfer.getData("id"), currentListId: title, prevListId: e.dataTransfer.getData("listID") });

  }

  const renderList = (item, i, li) => {
    return (
      <div
        onDoubleClick={handleDoubleClick(item.id)}
        draggable
        onDragStart={(e) => {
          handleOnDrag(e, item.id, title)
        }}
        key={item.id}
        style={{ background: "green", marginTop: "10px", display: "flex", justifyContent: "space-between" }}>
        {item.description}
        <button onClick={() => deleteTask(item.id)}>X</button>

      </div>
    )
  }


  return (
    <>
      {isOpen && (
        <Modal onClose={toggleModal}>
          <input placeholder="description" value={description} onChange={e => setDescription(e.target.value)} />
          <button onClick={createTask} >{id ? 'Edit' : 'Create'} task</button>
        </Modal>
      )}
      <div style={{ padding: "20px", margin: "10px", background: "#1A92DB" }}>
        <div>
          <h3>{list.listName}</h3>
          <ModalButton onClick={toggleModal}>+</ModalButton>
          <div>({list.length})</div>
        </div>
        <div
          onDragOver={handleOnDragOver}
          onDrop={handleOnDrop}
          style={{ background: "#BEE3F6", marginTop: "10px", minHeight: " 400px", minWidth: " 200px" }}
        >
          {list.map(renderList)}
        </div>
      </div>
    </>
  )

};