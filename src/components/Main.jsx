import { useEffect, useState } from "react";
import Card from "./Card";
import SelectedCart from "./SelectedCart";

const Main = ({coin,handleCoinUpdate}) => {

    const [player, setPlayer] = useState([]);
    const [available, setAvailable] = useState(true)
    const [selected, setSelected] = useState(false)
    // For Selected Player
    const [SelectedPlayer, setSelectedPlayer] = useState([])

    useEffect(()=>{
        fetch('Player.json')
        .then(res=> res.json())
        .then(data => setPlayer(data))
    },[])

    function handleAvailable()
    {
        setSelected(false)
        setAvailable(true)
    }
    function handleSelected ()
    {
        setAvailable(false)
        setSelected(true)
    }

    function handleSelectedPlayer (playerObj)
    {
        let newCoin = parseInt(coin)
        console.log(playerObj.price, newCoin);        
        if (playerObj.price <= newCoin)
        {
            newCoin-=playerObj.price
            setSelectedPlayer([...SelectedPlayer,playerObj])
            handleCoinUpdate(newCoin)
        }
        else 
        {
            alert('Not Enough RUPI for choose this player')
        }
    }

    return (
    <section className="w-10/12 mx-auto">

        {/* Available Player Section */}
        <div className="flex justify-between my-10">
            <h1>Available Players</h1>
            <div className="flex gap-3">
                <button onClick={handleAvailable} className="btn btn-accent">Available </button>
                <button onClick={handleSelected} className="btn btn-accent">Selected</button>
            </div>
        </div>

        {/* Player Grid Card */}
        <div className={`grid grid-cols-3 gap-10 ${available? '':'hidden'}`}>
            {
                player.map((player,inx)=> <Card 
                key={inx} 
                player={player} 
                handleSelectedPlayer = {handleSelectedPlayer}
                ></Card>)
            }
        </div>

        {/* Selected Player Card  */}
        <div className={` ${selected ? '': 'hidden'}`}>

            <ul className="list bg-base-100 rounded-box shadow-md">      
                {
                    SelectedPlayer.map((player,inx)=> <SelectedCart 
                    key={inx}
                    count={inx}
                    player={player}
                    ></SelectedCart>)
                }
            </ul>
        </div>
            
    </section>
    );
};

export default Main;