import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const {img, name, price, ratings, seller} = props.poduct;
    const {orderList}=props
    
    return (
        <div className='card'>
            <img src={img} alt="not found"/>
            <h5>{name}</h5>
            <h4>Price: {price}</h4>
            <h6>Rating: {ratings}</h6>
            <p><span>Seller: {seller}</span></p>
            <div onClick={()=> orderList(props.poduct)} className='order'>
                <h2>Add to Card</h2>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Card;