import React, { useEffect, useState } from 'react';
import Card from '../cart/Card';
import Order from '../order/Order';
import './Shop.css'

const Shop = () => {
    const [poducts, setPoducts] = useState([])
    const [cards, setCards] = useState([])
    const orderList =(id) => {   
        console.log(id)
        const newCard = [...cards, id]
        setCards(newCard);
    }

    useEffect(() => {
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setPoducts(data))
    },[])

    return (
        <div className='main'>
            <div className='cards'>
                {
                    poducts.map(poduct => 
                    <Card poduct={poduct} 
                    key={poduct.id}
                    orderList ={orderList}
                    ></Card>)
                }
            </div>
            <div className='stick'>
               <Order cards={cards}></Order>
            </div>
        </div>
    );
};

export default Shop;