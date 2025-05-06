



// import React, { useState } from 'react';
// import './App.css';

// const LoanCalculator = () => {
//   const [loanAmount, setLoanAmount] = useState(100000);
//   const [interestRate, setInterestRate] = useState(8.5);
//   const [termYears, setTermYears] = useState(5);
//   const [emi, setEmi] = useState(null);
//   const [schedule, setSchedule] = useState([]);
//   const [theme, setTheme] = useState('light');
//   const [showAbout, setShowAbout] = useState(false);

//   const calculateEMI = () => {
//     const principal = parseFloat(loanAmount);
//     const interest = parseFloat(interestRate) / 100 / 12;
//     const termMonths = parseInt(termYears) * 12;

//     const emiCalc =
//       (principal * interest * Math.pow(1 + interest, termMonths)) /
//       (Math.pow(1 + interest, termMonths) - 1);

//     setEmi(emiCalc.toFixed(2));

//     let balance = principal;
//     let scheduleArray = [];

//     for (let i = 1; i <= termMonths; i++) {
//       const interestPayment = balance * interest;
//       const principalPayment = emiCalc - interestPayment;
//       balance -= principalPayment;

//       scheduleArray.push({
//         month: i,
//         principal: principalPayment.toFixed(2),
//         interest: interestPayment.toFixed(2),
//         balance: balance.toFixed(2),
//       });
//     }
//     setSchedule(scheduleArray);
//   };

//   const resetTable = () => {
//     setSchedule([]);
//     setEmi(null);
//   };

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <div className={`container ${theme}`}>
//       <div className="navbar">
//         <h2>Loan Calculator</h2>
//         <div className="nav-links">
//           <button>HOME</button>
//           <button onClick={() => setShowAbout(!showAbout)}>About</button>
//           <button>EXCHANGE RATES (LIVE)</button>
//           <button onClick={toggleTheme}>ERROR PAGE</button>
//         </div>
//       </div>

//       <h1>Loan Calculator Dashboard</h1>
//       <div className="inputs">
//         <input
//           type="number"
//           value={loanAmount}
//           onChange={(e) => setLoanAmount(e.target.value)}
//           placeholder="Loan Amount"
//         />
//         <input
//           type="number"
//           value={interestRate}
//           onChange={(e) => setInterestRate(e.target.value)}
//           placeholder="Interest Rate (%)"
//         />
//         <input
//           type="number"
//           value={termYears}
//           onChange={(e) => setTermYears(e.target.value)}
//           placeholder="Term (Years)"
//         />
//         <button onClick={calculateEMI}>Calculate</button>
//       </div>
//       {emi && <h2>Monthly EMI: ${emi}</h2>}
//       <button className="reset" onClick={resetTable}>Reset Table</button>

//       {schedule.length > 0 && (
//         <table>
//           <thead>
//             <tr>
//               <th>Month</th>
//               <th>Principal</th>
//               <th>Interest</th>
//               <th>Remaining Balance</th>
//             </tr>
//           </thead>
//           <tbody>
//             {schedule.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.month}</td>
//                 <td>{item.principal} USD</td>
//                 <td>{item.interest} USD</td>
//                 <td>{item.balance} USD</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {showAbout && (
//         <div className="about-section">
//           <h2>About This Project</h2>
//           <p>This Loan Calculator is built using the following technologies:</p>
//           <ul>
//             <li><strong>React.js:</strong> Frontend library for building the UI</li>
//             <li><strong>JavaScript:</strong> Core logic and interaction handling</li>
//             <li><strong>CSS:</strong> Styling the components and theme support</li>
//             <li><strong>HTML:</strong> Structure and inputs</li>
//           </ul>
//           <p>Features include:</p>
//           <ul>
//             <li>Dynamic EMI calculation based on user input</li>
//             <li>Amortization schedule generation</li>
//             <li>Dark/Light theme toggling</li>
//             <li>Reset functionality</li>
//           </ul>
//           <p>Created by: <strong>Alok Kumar</strong></p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoanCalculator;















// import React, { useState } from 'react';
// import './App.css';

// const LoanCalculator = () => {
//   const [loanAmount, setLoanAmount] = useState(100000);
//   const [interestRate, setInterestRate] = useState(8.5);
//   const [termYears, setTermYears] = useState(5);
//   const [emi, setEmi] = useState(null);
//   const [schedule, setSchedule] = useState([]);
//   const [theme, setTheme] = useState('light');
//   const [showAbout, setShowAbout] = useState(false);

//   const calculateEMI = () => {
//     const principal = parseFloat(loanAmount);
//     const interest = parseFloat(interestRate) / 100 / 12;
//     const termMonths = parseInt(termYears) * 12;

//     const emiCalc =
//       (principal * interest * Math.pow(1 + interest, termMonths)) /
//       (Math.pow(1 + interest, termMonths) - 1);

//     setEmi(emiCalc.toFixed(2));

//     let balance = principal;
//     let scheduleArray = [];

//     for (let i = 1; i <= termMonths; i++) {
//       const interestPayment = balance * interest;
//       const principalPayment = emiCalc - interestPayment;
//       balance -= principalPayment;

//       scheduleArray.push({
//         month: i,
//         principal: principalPayment.toFixed(2),
//         interest: interestPayment.toFixed(2),
//         balance: balance.toFixed(2),
//       });
//     }
//     setSchedule(scheduleArray);
//   };

//   const resetTable = () => {
//     setSchedule([]);
//     setEmi(null);
//   };

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <div className={`container ${theme}`}>
//       <div className="navbar">
//         <h2>Loan Calculator</h2>
//         <div className="nav-links">
//           <button className="nav-button" onClick={() => alert('Home Clicked')}>HOME</button>
//           <button className="nav-button" onClick={() => setShowAbout(!showAbout)}>ABOUT</button>
//           <button className="nav-button" onClick={() => alert('Exchange Rates Clicked')}>EXCHANGE RATES (LIVE)</button>
//           <button className="nav-button">ERROR PAGE</button>
//           <label className="switch">
//             <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
//             <span className="slider round"></span>
//           </label>
//         </div>
//       </div>

//       <h1>Loan Calculator Dashboard</h1>
//       <div className="inputs">
//         <input
//           type="number"
//           value={loanAmount}
//           onChange={(e) => setLoanAmount(e.target.value)}
//           placeholder="Loan Amount"
//         />
//         <input
//           type="number"
//           value={interestRate}
//           onChange={(e) => setInterestRate(e.target.value)}
//           placeholder="Interest Rate (%)"
//         />
//         <input
//           type="number"
//           value={termYears}
//           onChange={(e) => setTermYears(e.target.value)}
//           placeholder="Term (Years)"
//         />
//         <button onClick={calculateEMI}>Calculate</button>
//       </div>
//       {emi && <h2>Monthly EMI: ${emi}</h2>}
//       <button className="reset" onClick={resetTable}>Reset Table</button>

//       {schedule.length > 0 && (
//         <table>
//           <thead>
//             <tr>
//               <th>Month</th>
//               <th>Principal</th>
//               <th>Interest</th>
//               <th>Remaining Balance</th>
//             </tr>
//           </thead>
//           <tbody>
//             {schedule.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.month}</td>
//                 <td>{item.principal} USD</td>
//                 <td>{item.interest} USD</td>
//                 <td>{item.balance} USD</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {showAbout && (
//         <div className="about-section">
//           <h2>About This Project</h2>
//           <p>This Loan Calculator is built using the following technologies:</p>
//           <ul>
//             <li><strong>React.js:</strong> Frontend library for building the UI</li>
//             <li><strong>JavaScript:</strong> Core logic and interaction handling</li>
//             <li><strong>CSS:</strong> Styling the components and theme support</li>
//             <li><strong>HTML:</strong> Structure and inputs</li>
//           </ul>
//           <p>Features include:</p>
//           <ul>
//             <li>Dynamic EMI calculation based on user input</li>
//             <li>Amortization schedule generation</li>
//             <li>Dark/Light theme toggling</li>
//             <li>Reset functionality</li>
//           </ul>
//           <p>Created by: <strong>Alok Kumar</strong></p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoanCalculator;








import React, { useState, useEffect } from 'react';
import './App.css';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [termYears, setTermYears] = useState(5);
  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [theme, setTheme] = useState('light');
  const [showAbout, setShowAbout] = useState(false);

  const [currency, setCurrency] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState(1);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      if (currency === 'USD') {
        setExchangeRate(1);
        return;
      }
      try {
        const res = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
        const data = await res.json();
        setExchangeRate(data.rates[currency] || 1);
      } catch (error) {
        console.error("Failed to fetch exchange rates:", error);
        setExchangeRate(1);
      }
    };

    fetchExchangeRate();
  }, [currency]);

  const getCurrencySymbol = (curr) => {
    const symbols = {
      USD: '$',
      INR: '₹',
      EUR: '€',
      GBP: '£',
      JPY: '¥'
    };
    return symbols[curr] || curr;
  };

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const interest = parseFloat(interestRate) / 100 / 12;
    const termMonths = parseInt(termYears) * 12;

    const emiCalc =
      (principal * interest * Math.pow(1 + interest, termMonths)) /
      (Math.pow(1 + interest, termMonths) - 1);

    setEmi(emiCalc.toFixed(2));

    let balance = principal;
    let scheduleArray = [];

    for (let i = 1; i <= termMonths; i++) {
      const interestPayment = balance * interest;
      const principalPayment = emiCalc - interestPayment;
      balance -= principalPayment;

      scheduleArray.push({
        month: i,
        principal: principalPayment.toFixed(2),
        interest: interestPayment.toFixed(2),
        balance: balance.toFixed(2),
      });
    }
    setSchedule(scheduleArray);
  };

  const resetTable = () => {
    setSchedule([]);
    setEmi(null);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`container ${theme}`}>
      <div className="navbar">
        <h2>Loan Calculator</h2>
        <div className="nav-links">
          <button className="nav-button" onClick={() => alert('Home Clicked')}>HOME</button>
          <button className="nav-button" onClick={() => setShowAbout(!showAbout)}>ABOUT</button>
          <button className="nav-button" onClick={() => alert('Exchange Rates Clicked')}>EXCHANGE RATES (LIVE)</button>
          <button className="nav-button">ERROR PAGE</button>
          <label className="switch">
            <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <h1>Loan Calculator Dashboard</h1>

      <div className="inputs">
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="Loan Amount"
        />
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Interest Rate (%)"
        />
        <input
          type="number"
          value={termYears}
          onChange={(e) => setTermYears(e.target.value)}
          placeholder="Term (Years)"
        />

        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>

        <button onClick={calculateEMI}>Calculate</button>
      </div>

      {emi && (
        <h2>
          Monthly EMI: {getCurrencySymbol(currency)}{(emi * exchangeRate).toFixed(2)} {currency}
        </h2>
      )}

      <button className="reset" onClick={resetTable}>Reset Table</button>

      {schedule.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Principal</th>
              <th>Interest</th>
              <th>Remaining Balance</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => (
              <tr key={index}>
                <td>{item.month}</td>
                <td>{(item.principal * exchangeRate).toFixed(2)} {currency}</td>
                <td>{(item.interest * exchangeRate).toFixed(2)} {currency}</td>
                <td>{(item.balance * exchangeRate).toFixed(2)} {currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showAbout && (
        <div className="about-section">
          <h2>About This Project</h2>
          <p>This Loan Calculator is built using the following technologies:</p>
          <ul>
            <li><strong>React.js:</strong> Frontend library for building the UI</li>
            <li><strong>JavaScript:</strong> Core logic and interaction handling</li>
            <li><strong>CSS:</strong> Styling the components and theme support</li>
            <li><strong>HTML:</strong> Structure and inputs</li>
          </ul>
          <p>Features include:</p>
          <ul>
            <li>Dynamic EMI calculation based on user input</li>
            <li>Amortization schedule generation</li>
            <li>Dark/Light theme toggling</li>
            <li>Reset functionality</li>
            <li>Currency selection with live exchange rates</li>
          </ul>
          <p>Created by: <strong>Alok Kumar</strong></p>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
