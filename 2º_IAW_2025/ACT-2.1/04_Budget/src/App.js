import React, { useState, useEffect } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import uuid from "uuid/v4";

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // *********** functionality **************
  // Add charge
  const handleCharge = e => {
    setCharge(e.target.value);
  };

  // Add amount
  const handleAmount = e => {
    let amount = e.target.value;
    amount === "" ? setAmount(amount) : setAmount(parseInt(amount));
  };

  // handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };

  // handle submit
  const handleSubmit = e => {
    e.preventDefault();
    // Check data 
    if (charge !== "" && amount > 0) {
      if (edit) {
        // Edit Expense
        let tempExpenses = expenses.map(item => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses); // New list
        setEdit(false);
      } else {
        // New expense
        const singleExpense = { id: uuid(), charge, amount };
        // A new array is required
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and amount value has to be bigger than zero`
      });
    }
  };
  // handle delete
  const handleDelete = id => {
    let tempExpenses = expenses.filter(item => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "item deleted" });
  };
  // clear all items
  const handleClearItems = () => {
    setExpenses([]);
  };
  // handle edit
  const handleEdit = id => {
    let expense = expenses.find(item => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm
          handleSubmit={handleSubmit}
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={handleClearItems}
        />
      </main>
      <h1>
        total spending :
        <span className="total">    
          {expenses.reduce((acc, curr) => (acc += curr.amount), 0)} €
        </span>
      </h1>
    </>
  );
}

export default App;
