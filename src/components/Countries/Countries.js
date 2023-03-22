import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data));

    },[])
    return (
        <div className='container'>
            <h1 style={{ textAlign:'center' }}>{countries.length} Countries in this World</h1>
            <div className='countries-container'>
                {countries.map((country,index)=>
                <Country country={country} 
                 key={index}
                />)}
            </div>
        </div>
    );
};

export default Countries;