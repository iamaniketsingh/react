import {useState,useEffect} from 'react'

const useCurrencyInfo = (from) => {
    const [data, setdata] = useState({})
    useEffect(() => {
      async function fetchExchange() {
        let api = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`;
        const res = await fetch(api);
        const data = await res.json();
      
        setdata(data[from]);
      }
      fetchExchange();
    }, [from]);
    return data
}

export default useCurrencyInfo