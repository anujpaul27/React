import { LineChart as LChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';
import { useEffect, useState } from 'react';


const LineChart = () => {

    const [player,setPlayer] = useState([])

    useEffect(()=> {
        fetch('Player.json')
        .then(res=> res.json())
        .then(data=> setPlayer(data))
    },[])


    return (
        <div className="w-10/12 mx-auto mt-20">
            
            <LChart style={{width:'100%', height:'300px'}} data={player}>
                <Line type='linear' dataKey={'price'} stroke='red'></Line>
                <XAxis dataKey='player_name'></XAxis>
                <YAxis width='auto'></YAxis>
            </LChart>

        </div>
    );
};

export default LineChart;