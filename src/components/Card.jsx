

const Card = ({player,handleSelectedPlayer}) => {
    const {player_name,player_image,country,plyer_type,rating,price} = player
    return (       
            <div className={`card  w-full shadow-sm`}>
            <figure>
                <img
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300 "
                src={player_image}
                alt="Player Photo" />
            </figure>
            <div className="card-body">
                <h1 className="text-lg font-bold">{player_name}</h1>
                <div className="flex justify-between">
                    <p>{country}</p>
                    <p>{plyer_type}</p>
                    <hr />
                </div>
                <div className="flex justify-between text-[12px]">
                    <p>Rating</p>
                    <p>{rating}</p>
                </div>
                <div className="flex justify-between text-[12px]">
                    <p>Price: {price}</p>
                    <button onClick={()=>handleSelectedPlayer(player)} className="btn btn-sm">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Card;