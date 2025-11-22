import { useEffect, useState } from "react";
import Card from "./Card";

const Main = () => {

    const [player, setPlayer] = useState([]);

    useEffect(()=>{
        fetch('Player.json')
        .then(res=> res.json())
        .then(data => setPlayer(data))
    },[])

    return (
    <section className="w-10/12 mx-auto">

        {/* Available Player Section */}
        <div className="flex justify-between my-10">
            <h1>Available Players</h1>
            <div className="flex gap-3">
                <button className="btn btn-accent">Available </button>
                <button className="btn btn-accent">Selected</button>
            </div>
        </div>

        {/* Player Grid Card */}
        <div className="grid grid-cols-3 gap-10">
            {
                player.map((player,inx)=> <Card key={inx} player={player}></Card>)
            }
        </div>
            
    </section>
    );
};

export default Main;