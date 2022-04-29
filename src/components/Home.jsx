import React from 'react'

import './home.css'


import ReactDOM from 'react-dom';
import Modal from 'react-modal';




Modal.setAppElement('#root');
const Home = () => {

  
  
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal() {
    setIsOpen(false);
  }
 
  return (
    <div>
    <button onClick={openModal}>Open Modal</button>
    <Modal
      isOpen={modalIsOpen}
      
      onRequestClose={closeModal}
     
      contentLabel="Example Modal"
    >
      
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </Modal>
  </div>
  )
}

export default Home