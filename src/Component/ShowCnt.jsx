import { useState } from 'react';
import './style.css'

const ShowCnt = ({cnt,mark}) => {
    const {name,flags} = cnt

    const [visited,setVisited] = useState(false)

    function handleVisited ()
    {
        setVisited(!visited)
    }

    return (
        <div className={`border ${visited? 'visit':''}`}>
            <img className='wt' src={flags.png} alt="" />
            <p>{name.common}</p>
            <button onClick={()=>handleVisited(cnt)}>{visited?'visited':'Not Visited'}</button>
            <button onClick={()=>mark(name.common)}>Mark</button>
        </div>
    );
};

export default ShowCnt;