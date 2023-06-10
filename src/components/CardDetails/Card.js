import React from 'react';
import "./Card.css";
import Tilt from 'react-parallax-tilt';
const Card = ({ imageUrl, rarity }) => {
    const legendary = <span className="awesome2 font-size-xs text-uppercase font-weight-bolder">Legendary</span>
    const rare = <span className="awesome font-size-xs text-uppercase font-weight-bolder">Rare</span>
    const epic = <span className="text-primary font-size-xs text-uppercase font-weight-bolder">Epic</span>
    return (
        <Tilt>
            <img className={`w-100 ${rarity}`} style={{borderRadius: "8px"}} src={imageUrl} />
            <span className="position-absolute" style={{top: 3, right: 10}}>
                    {rarity === "rare-card" ? rare : 
                    rarity === "legendary-card" ? legendary : 
                    rarity === "epic-card" ? epic : ""}
                </span>
        </Tilt>
      );
    };

export default Card