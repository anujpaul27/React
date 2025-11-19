import { useEffect, useState } from "react";
import ShowCnt from "./ShowCnt";
import './style.css'

const Country = () => {

    const [Country, setCountry] = useState([])
    const [mark,setMark] = useState([])

    useEffect(()=>{
        fetch('Country.json')
        .then(res=> res.json())
        .then(data=> setCountry(data))
    },[])

    function MarkHandle(cnt)
    {
        setMark([...mark,cnt])
    }

    return (
        <div>
            <h2>Visited Country List: {mark.length}</h2>
            <div className="container">
                {
                    Country.map(cnt=> <ShowCnt mark={MarkHandle} cnt={cnt}></ShowCnt>)
                }
            </div>
        </div>
    );
};

export default Country;