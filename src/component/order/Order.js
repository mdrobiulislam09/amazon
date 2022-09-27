import React from 'react';

const Order = (props) => {
    const data = props.cards;
    let tottal = 0 ;
    for(const price of data){
        tottal = tottal + price.price;
    }
    let tax =parseFloat((tottal*.1).toFixed(3));
    
    return (
        <div>
            <h1>Order List</h1>
            <h2>Ordered: {props.cards.length}</h2>
            <h2>Price: {tottal}</h2>
            <h3>{tax}</h3>
        </div>
    );
};

export default Order;