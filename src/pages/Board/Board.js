import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { Modal } from "../../components/Modal/Modal";
import { doneSelector, inProgressSelector, toDoSelector } from "../../redux/selectors/board/boardSelector";


const ModalButton = styled.button`
color: #fff;
font-size: 20px;
`

export const Board = () => {
    const toDoList = useSelector(toDoSelector);
    const inProgressList = useSelector(inProgressSelector);
    const doneList = useSelector(doneSelector);
    const [isOpen, setIsOpen] = React.useState(false);

    const renderList = (item) => {
        return (
            <div key={item.id}  style={{background: "green", marginTop: "10px"}}>{item.description}</div>
        )
    }

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
 return (
    <div style={{display : "flex"}}>
        {isOpen && (
        <Modal onClose={toggleModal}>
          <p>This is the content of the modal.</p>
        </Modal>
      )}
      <div style= {{padding : "20px", margin : "10px", background : "#1A92DB"}}>
       <div>
        <h3>To do</h3>
        <ModalButton onClick={toggleModal}>+</ModalButton>
        <div>Counter</div>
       </div>
       <div style= {{background : "#BEE3F6", marginTop : "10px", minHeight : " 400px", minWidth : " 200px"}}>
       {toDoList.map(renderList)}
        </div>
      
      </div>
      <div style= {{padding : "20px", margin : "10px", background : "#E12A59"}}>
      <div>
        <h3>In Progress</h3>
        <ModalButton>+</ModalButton>
        <div>Counter</div>
       </div>
      <div style= {{background : "#F4C2C3", marginTop : "10px", minHeight : " 400px", minWidth : " 200px"}}>
      {inProgressList.map(renderList)}

        </div>
      </div>
      <div style= {{padding : "20px", margin : "10px", background : "#102640"}}>
      <div>
        <h3>Done</h3>
        <ModalButton>+</ModalButton>
        <div>Counter</div>
       </div>
      <div style= {{background : "#BCC3CA", marginTop : "10px", minHeight : " 400px", minWidth : " 200px"}}>
      {doneList.map(renderList)}
        </div>
      </div>
    </div>
 )
    
 
};