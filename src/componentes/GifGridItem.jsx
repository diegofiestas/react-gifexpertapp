import React from 'react';

export const GifGridItem = ({img}) => {
    return(
        <div className="card animate__animated animate__bounce animate__fadeIn" key={img.id}>        
        <img src={img.url} title={img.title} alt={img.title}/>
        <p>{img.title}</p>
        </div>
    )
}