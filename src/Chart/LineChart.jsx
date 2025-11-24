import { useEffect, useState } from 'react';
import { Line, LineChart as LChart, XAxis, YAxis } from 'recharts';
const LineChart = () => {

    const [player, setPlayer] = useState([])


    useEffect (()=>{
        fetch('Player.json')
        .then(res=> res.json())
        .then(data=> setPlayer(data))
    },[])
    
    return (
        <div className='w-10/12 mx-auto my-10'>
            <LChart style={{width:'100%', height:'300px'}} data={player}>
                <Line dataKey={'price'} stroke='red'></Line>
                <XAxis dataKey={'player_name'}></XAxis>
                <YAxis dataKey='price'></YAxis>
            </LChart>
        </div>
    );
};

export default LineChart;