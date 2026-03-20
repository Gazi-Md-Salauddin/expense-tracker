import React from 'react'
import './Modal.css'
const Modal = ({ showModal, setShowModal }) => {
  return(
    <>
      {showModal && <div className="modal-overlay">
        <div className="modal">
          <button className="close-btn" onClick={() => setShowModal(false)}>X</button>
         <h2 className="modal-heading">Add Income</h2>
         <div className="modal-input">
           <input style={{backgroundColor: "white", borderRadius: "8px", color: "black"}} type="Number" placeholder="Enter Amount"></input><br></br>
           <input style={{backgroundColor: "white", borderRadius: "8px", color: "black"}} type="text" placeholder="Enter Details"></input><br></br>
           <button className="modal-income">Add Income</button>
         </div>
         
         
       </div>
      </div> 
      }
      
      
      
      
    </>
    
    )
}

export default Modal;