import React from 'react';
import styled from 'styled-components';

// Styled component for the backdrop
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled component for the modal container
const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
`;

// Styled component for the modal header
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

// Styled component for the modal content
const ModalContent = styled.div`
  /* Add your styles for modal content here */
`;

// Styled component for the modal footer
const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// Example of the modal component
export const Modal = ({ onClose, children }) => {
  return (
    <Backdrop>
      <ModalContainer>
        <ModalHeader>
          <h2>Title</h2>
          <button onClick={onClose}>x</button>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
        <ModalFooter>
          <button onClick={onClose}>x</button>
        </ModalFooter>
      </ModalContainer>
    </Backdrop>
  );
};

