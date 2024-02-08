import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hook/useCurrencyInfo";
function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  //console.log(currencyInfo)

  const CurrOptions = Object.keys(currencyInfo);

  useEffect(() => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  }, [amount]);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div
      className="w-screen h-screen text-xl font-semibold flex flex-wrap justify-center items-center
      bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://store-images.s-microsoft.com/image/apps.3790.13746602931236419.ec145616-d3b2-4fef-b955-55708f912cfd.44b1adcc-6220-448a-ada7-ec31717c5e62?mode=scale&q=90&h=1080&w=1920')`,
      }}
    >
      <div className="w-11/12 h-11/12 ">
        <div
          className="w-5/12 h-full  mx-auto border border-gray-60 
        rounded-lg p-5 backdrop-blur-sm bg-white/30"
        >
          <div className="w-full mb-1 h-11/12">
            <InputBox
              id="from"
              placeholder={"Enter Amount"}
              amount={amount}
              CurrOptions={CurrOptions}
              selected={"usd"}
              setFrom={setFrom}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
                border-2 border-white  bg-blue-600 text-white 
                rounded-lg  items-center flex"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox
              id="to"
              amount={convertedAmount}
              setConvertedAmount={setConvertedAmount}
              CurrOptions={CurrOptions}
              selected={"inr"}
              setTo={setTo}
              to={to}
              disabled={true}
              placeholder={"Converted Amount"}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 
              rounded-lg"
          >
            {amount
              ? `Converted ${amount} ${from} equals to  
              ${(amount * currencyInfo[to]).toFixed(2)} ${to}`
              : `Convert Currency`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
