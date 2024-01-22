import { useEffect, useState } from "react";
//we are taking currency as an input    
//[currency] when ever there is change in currency we need to refire it
function useCurrencyInfo(currency){
//whatever data we are storing we need to save that 
const [data,setdata] = useState({});
useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res)=>res.json()).then((res)=>setdata(res[currency]))
    //we need to fetch data and not date and we just need usd,inr and its keep on chanign hence res[currency]
},[currency])

return data
}   

export default  useCurrencyInfo;