import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { Modal } from "../../components/Modal/Modal";

const ModalButton = styled.button`
color: #fff;
font-size: 20px;
`



export const TaskList = ({list, createList, title}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const createTask = () => {
    dispatch(createList([...list, {id: Math.random(), description}]))
    setDescription("");
    toggleModal();
  };

  const deleteTask = (id) => {
    dispatch(createList(list.filter(item => item.id !== id)))
  };

  
    const renderList = (item) => {
        return (
            <div key={item.id}  style={{background: "green", marginTop: "10px", display: "flex", justifyContent: "space-between" }}>
               {item.description}
               <button onClick={() =>deleteTask(item.id)}>X</button>
               
            </div>
        )
    }


    return (
        <>
        {isOpen && (
            <Modal onClose={toggleModal}>
               <input placeholder="description" value={description} onChange={e => setDescription(e.target.value)} />
               <button onClick={createTask} >Create task</button>
            </Modal>
          )}
        <div style= {{padding : "20px", margin : "10px", background : "#1A92DB"}}>
        <div>
         <h3>{title}</h3>
         <ModalButton onClick={toggleModal}>+</ModalButton>
         <div>({list.length})</div>
        </div>
        <div style= {{background : "#BEE3F6", marginTop : "10px", minHeight : " 400px", minWidth : " 200px"}}>
        {list.map(renderList)}
         </div>
       </div>
        </>
    )

};