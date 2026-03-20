import React, { useState } from 'react'
import './Expense.css'
import Modal from '../Modal/Modal'
const Expense = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <h1>Expense Tracker</h1>
      <div className="card-container">
        <div className="card total">
         <h2>Total</h2>
         <p>0</p>
        </div>
        <div className="card income-card">
         <h2>Income</h2>
         <p>0</p>
        </div>
        
        <div className="card expense-card">
         <h2>Expense</h2>
         <p>0</p>
        </div>
        <button className="income-btn" onClick={() => setShowModal(true)}>Add Income</button>
        
        <button className="expense-btn" onClick={() => setShowModal(true)}>Add Expense</button>
      </div>
     <Modal showModal={showModal}
      setShowModal={setShowModal}/>
    </>
  )
}

export default Expense;