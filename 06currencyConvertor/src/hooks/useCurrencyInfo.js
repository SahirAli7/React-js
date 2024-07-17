import {useState , useEffect} from 'react'

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/3b18a2bc3d7b87454a105965/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;
