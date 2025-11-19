import { useEffect, useState } from "react";
import ShowCnt from "./ShowCnt";
import './style.css'
import {addToLS, getStoredCart} from './LS'
const Country = () => {

    const [Country, setCountry] = useState([])
    const [mark,setMark] = useState([])
    const [localStorageCart, setLocalStorageCart] = useState([])

    useEffect(()=>{
        fetch('Country.json')
        .then(res=> res.json())
        .then(data=> setCountry(data))
    },[])

    // Load Local Storage data
    useEffect(()=>{
        const storedCart = getStoredCart()
        setLocalStorageCart(storedCart)
    },[])

    function MarkHandle(cnt)
    {
        setMark([...mark,cnt])
        addToLS(cnt)       
    }

    return (
        <div>
            <h2>Visited Country List: {mark.length}</h2>
            {
                localStorageCart.map(value=> <p>{value}</p> )
            }
            <div className="container">
                {
                    Country.map(cnt=> <ShowCnt mark={MarkHandle} cnt={cnt}></ShowCnt>)
                }
            </div>
        </div>
    );
};

export default Country;