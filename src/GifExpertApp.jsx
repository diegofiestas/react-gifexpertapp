import React from 'react';
import { useState } from 'react';
import AddCategory from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';

export default function GifExpertApp(){

    const [categorias, setCategorias] = useState(['Samurai X']);

    return(
        <>
        <h2>GifExpertApp</h2>
        <hr />
        <AddCategory setCategorias={setCategorias} />
        <hr />
        <ol>
        {categorias.map( categoria => (
            <GifGrid 
                key={categoria}
                categoria={categoria} 
            />
        ))}
        </ol>
        </>
    )
}