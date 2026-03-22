import React, { useState } from 'react'
import './Modal.css'
const Modal = ({ showModal, setShowModal, setIncome, setExpense, modalType }) => {
  const [amount, setAmount] = useState("");
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  }
  //Add income button
  const handleSubmit = () => {
    if(!amount) return;
    if(modalType === "income"){
      setIncome(prev => prev + Number(amount));
    }else{
      setExpense(prev => prev + Number(amount));
    }
    
    setShowModal(false);
  }
  return(
    <>
      {showModal && <div className="modal-overlay">
        <div className="modal">
          <button className="close-btn" onClick={() => setShowModal(false)}>X</button>
         <h2 className="modal-heading">{modalType === "income" ? "Add Income" : "Add Expense"}</h2>
         <div className="modal-input">
           <input style={{backgroundColor: "white", borderRadius: "8px", color: "black"}} type="number" placeholder="Enter Amount" required value={amount} onChange={handleAmountChange}></input><br></br>
           <input style={{backgroundColor: "white", borderRadius: "8px", color: "black"}} type="text" placeholder="Enter Details" required></input><br></br>
           <button className="modal-income" onClick={handleSubmit}>{modalType === "income" ? "Add Income" : "Add Expense"}</button>
         </div>
         
         
       </div>
      </div> 
      }
      
      
      
      
    </>
    
    )
}

export default Modal;