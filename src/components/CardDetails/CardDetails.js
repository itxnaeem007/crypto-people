import React from 'react'
import Card from "./Card";

const CardDetails = ({ imageUrl, rarity }) => {
    return (
    <div className="d-flex flex-column p-2 bordered-card2">
        
        <div className="p-2">
        <Card imageUrl={imageUrl} rarity={rarity} />
        </div>
        
    </div>
    )
}

export default CardDetails
