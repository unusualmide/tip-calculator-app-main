import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <Header />
      <TipCalculator />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <span>SPLI</span>
      <span>TTER</span>
    </header>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [numOfPeople, setNumberOfPeople] = useState("");
  const [custom, setCustom] = useState("");

  function handleReset() {
    setBill("");
    setNumberOfPeople("");
    setCustom("");
  }

  const tipAmount = (bill * (custom / numOfPeople)) / 100;

  const totalAmount = bill / numOfPeople + tipAmount;

  return (
    <div className="tipcalculator">
      <CalculateBill
        bill={bill}
        onSetBill={setBill}
        numOfPeople={numOfPeople}
        onNumberOfPeople={setNumberOfPeople}
        custom={custom}
        setCustom={setCustom}
      />
      <DisplayBill
        tipAmount={tipAmount}
        bill={bill}
        totalAmount={totalAmount}
        handleReset={handleReset}
      />
    </div>
  );
}

function CalculateBill({
  bill,
  onSetBill,
  numOfPeople,
  onNumberOfPeople,
  custom,
  setCustom,
}) {
  return (
    <div className="calculatebill">
      <Bill bill={bill} onSetBill={onSetBill} />
      <SelectTip
        bill={bill}
        numOfPeople={numOfPeople}
        custom={custom}
        setCustom={setCustom}
      />
      <NumberOfPeople
        numOfPeople={numOfPeople}
        onNumberOfPeople={onNumberOfPeople}
      />
    </div>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div className="bill">
      <label>Bill</label>
      <input
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
        type="text"
        required
      />
    </div>
  );
}

function SelectTip({ custom, setCustom }) {
  //function handleSubmit(){
  //const tipAmount = (bill * (value / numOfPeople) / 100);
  //setValue(tipAmount);
  //console.log(tipAmount);
  // }

  return (
    <div className="selected">
      <label>Select Tip %</label>
      <div className="select">
        <input
          className="radio"
          type="button"
          value="5"
          onClick={(e) => setCustom(e.target.value)}
        />
        <input
          className="radio"
          type="button"
          value="10"
          onClick={(e) => setCustom(e.target.value)}
        />
        <input
          className="radio"
          type="button"
          value="15"
          
          onClick={(e) => setCustom(e.target.value)}
          
        />
      </div>
      <div className="select">
        <input
          type="button"
          className="radio"
          value="25"
          onClick={(e) => setCustom(e.target.value)}
        />
        <input
          type="button"
          className="radio"
          value="50"
          onClick={(e) => setCustom(e.target.value)}
        />
        <input
        required
          value={custom}
          onChange={(e) => setCustom(Number(e.target.value))}
          className="custom"
          type="text"
          placeholder="Custom"
        />
      </div>
    </div>
  );
}

function NumberOfPeople({ numOfPeople, onNumberOfPeople }) {
  return (
    <div className="numofpeople">
      <label>Number of People</label>
      <input
      required
        className={numOfPeople === 0 ? "error" : numOfPeople}
        value={numOfPeople}
        onChange={(e) => onNumberOfPeople(Number(e.target.value))}
        type="text"
      />
    </div>
  );
}

function DisplayBill({ tipAmount, bill, totalAmount, handleReset }) {
  return (
    <div className="revealamount">
      <TipAmount tipAmount={tipAmount} bill={bill} />
      <TotalAmount totalAmount={totalAmount} bill={bill} />
      <button
        className={`reset ${
          tipAmount > 0 && totalAmount > 0 ? "success" : "reset"
        }`}
        onClick={handleReset}
      >
        RESET
      </button>
    </div>
  );
}

function TipAmount({ tipAmount, bill }) {
  return (
    <div className="tipamount">
      <h3>
        Tip Amount
        <span className="person">/ person</span>
      </h3>
      <p className="balance">
        {bill > tipAmount ? `$${tipAmount.toFixed(2)}` : "$0.00"}
      </p>
    </div>
  );
}

function TotalAmount({ totalAmount, bill }) {
  return (
    <div className="total">
      <h3>
        Total
        <span className="person">/ person</span>
      </h3>
      <p className="balance">
        {bill > totalAmount ? `$${totalAmount.toFixed(2)}` : "$0.00"}
      </p>
    </div>
  );
}


