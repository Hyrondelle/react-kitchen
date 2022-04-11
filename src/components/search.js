import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './card';


const Search = () => {
    const [foodData,setFoodData] = useState([]);
    const [searchFood,setSearchFood] = useState('avocat');
    useEffect(()=>{
        axios.get('https://fr.openfoodfacts.org/cgi/search.pl?search_terms='+searchFood+'&search_simple=1&action=process&json=1')
        .then((res)=>setFoodData(res.data.products))
    },[searchFood])
    return (
        <div className='search'>
            <div className='search-option'>
                <input type='text'
                onChange={(e)=>setSearchFood(e.target.value)} 
                placeholder='ingredient,plat...'
                className='search-input'>
                </input>
            </div>
            <div className='result'>
                {foodData.map((food)=><Card food={food} key={food._id}/>)}
            </div>

        </div>
    );
};

export default Search;