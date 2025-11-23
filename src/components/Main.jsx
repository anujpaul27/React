import { useEffect, useState } from "react";
import Card from "./Card";
import SelectedCart from "./SelectedCart";

const Main = ({coin,handleCoinUpdate}) => {

    const [player, setPlayer] = useState([]);
    // Condition check player for the show content
    const [available, setAvailable] = useState(true)
    const [selected, setSelected] = useState(false)
    // For Selected Player List
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

    // Selected Player
    function handleSelectedPlayer (playerObj)
    {
        let newCoin = parseInt(coin)
        console.log(playerObj.price, newCoin);        
        if (playerObj.price <= newCoin && SelectedPlayer.length < 6)
        {
            newCoin-=playerObj.price
            setSelectedPlayer([...SelectedPlayer,playerObj])
            handleCoinUpdate(newCoin)
        }
        else if (SelectedPlayer.length > 5)
        {
            alert('Maximum add six player of you selected player list')
        }
        else 
        {
            alert('Not Enough RUPI for choose this player')
        }
    }

    // Remove Player
    function removePlayer (id)
    {
        const remainingSelectedPlayer = SelectedPlayer.filter(player=> player.id != id)
        setSelectedPlayer(remainingSelectedPlayer)
    }

    return (
    <section className="w-10/12 mx-auto">

        {/* Available Player Section */}
        <div className="flex justify-between my-10">
            <h1>{available ? 'Available Players':`Selected Player ${SelectedPlayer.length}/6`}</h1>
            <div className="flex gap-3">
                <button onClick={handleAvailable} className={`btn ${available?'btn-accent':''}`}>Available </button>
                <button onClick={handleSelected} className={`btn ${selected?'btn-accent':''}`}>Selected</button>
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
                    removePlayer={removePlayer}
                    ></SelectedCart>)
                }
            </ul>
        </div>
            
    </section>
    );
};

export default Main;