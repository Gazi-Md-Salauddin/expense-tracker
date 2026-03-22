import React, { useState } from 'react'
import './Expense.css'
import Modal from '../Modal/Modal'
const Expense = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [modalType, setModalType] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h1>Expense Tracker</h1>
      <div className="card-container">
        <div className="card total">
         <h2>Total</h2>
         <p>{income - expense}</p>
        </div>
        <div className="card income-card">
         <h2>Income</h2>
         <p>{income}</p>
        </div>
        
        <div className="card expense-card">
         <h2>Expense</h2>
         <p>{expense}</p>
        </div>
        <button className="income-btn" onClick={() => {setModalType("income"); setShowModal(true)}}>Add Income</button>
        
        <button className="expense-btn" onClick={() => {setModalType("expense"); setShowModal(true)}}>Add Expense</button>
      </div>
     <Modal showModal={showModal}
      setShowModal={setShowModal}
      setIncome={setIncome}
      setExpense={setExpense}
      modalType={modalType}/>
    </>
  )
}

export default Expense;