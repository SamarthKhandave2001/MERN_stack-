import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.css'

import useCurrencyInfo from './hooks/useCurrencyInfo';
import {InputBox} from './components/index.js';
import { useState } from 'react';




function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const[convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

const swap = () => {
  setFrom(to);
  setTo(from);
  setAmount(convertedAmount);
  setConvertedAmount(amount);
}

const convert = () => {
  setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
}

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
<div className='w-full'>
  <div className='w-full max-w-md mx-auto border border-gray-60 riunded-lg p-5 backdrop-blur-sm bg-white/30'>

  <form onSubmit={(e) => {
    e.preventDefault();
    convert();
  }}>

    <div className='w-full mb-1'>
      <InputBox
      label="From"
      amount={amount}
      onAmountChange={(amount) => setAmount(amount)}
      onCurrencyChange={(currency) => {setFrom(currency)}}
      selectedCurrency={from}
      currencies={options}
      />
    </div>
      
  </form>

</div>
    </div>
    </div>
  );
}

export default App;