import React from 'react';
import { useState } from 'react';

export default function AddCategory({setCategorias}){

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategorias( cat => [ inputValue, ...cat, ]);
            setInputValue('');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}            
        />
        </form>
    )
}