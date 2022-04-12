import React from 'react';

const Card = (props) => {
    return (
        <div className='card'>
            <img className='image' 
            alt='product'
            src={props.food.image_front_thumb_url}/>
            <h3>{props.food.product_name}</h3>
            <div className='infos'>
                <div className='infos_product'>
                    <h4>{props.food.brands}</h4>
                    <h4>{props.food.quantity}</h4>
                </div>
                <p className='ingredients'>{props.food.ingredients_text_fr}</p>
            </div>
        </div>
    );
};

export default Card;