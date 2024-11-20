import { useState, useEffect, useRef } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import Alert from "./components/Alert.jsx";
import {nanoid} from "nanoid";

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

export default function App() {
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");

  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);

  const idRef = useRef(0);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // *********** functionality **************
  // Add charge
  function handleCharge(e){
    setCharge(e.target.value);
  };

  // Add amount
  function handleAmount(e){
    let amount = e.target.value;
    (amount)?setAmount(parseInt(amount)):setAmount(amount);
  };

  // handle alert
  function handleAlert({ type, text }){
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  // handle submit
  function handleSubmit(e){
    e.preventDefault();
    // Check data 
    if (charge !== "" && amount > 0) {
      if (edit) {
        // Edit Expense
        setExpenses(expenses.map(item => {
          return item.id === idRef.current ? { ...item, charge, amount } : item;
        })); 
        // New list
        setEdit(false);
      } else {
        // New expense
        const newExpense = { id:nanoid(), charge:charge, amount:amount };
        // A new array is required
        setExpenses([...expenses, newExpense]);
        handleAlert({ type: "success", text: "Expense added" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `Charge can't be empty value and amount value has to be bigger than zero`
      });
    }
  };

  // handle delete
  function handleDelete(id){
    setExpenses(expenses.filter(item => item.id !== id));
    handleAlert({ type: "danger", text: "Expense deleted" });
  };

  // clear all items
  function handleClearItems(){
    setExpenses([]);
  };

  // handle edit
  function handleEdit(id){
    let { charge, amount } = expenses.find(item => item.id === id);
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    idRef.current = id;
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          clearItems={handleClearItems}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
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
