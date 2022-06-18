import React, { useState, useEffect } from "react";
import Header from './components/Header';
import IncomeForm from "./components/IncomeForm";
import IncomesList from "./components/IncomesList";

function App() {
  const [incomes, setIncomes] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    let tmp = 0; // holds the total income amount
    for(let i = 0; i < incomes.length; i++) {
      tmp += parseInt(incomes[i].amt);
    }
    setTotalIncome(tmp);
  }, [incomes]);

  return (
    <div className="App w3-card-2 w3-round w3-pink">
      <Header totalIncome={totalIncome} />
      <IncomeForm incomes={incomes} setIncomes={setIncomes} />
      <IncomesList incomes={incomes} setIncomes={setIncomes} />
    </div>
  );
}

export default App;
