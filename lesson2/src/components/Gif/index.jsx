import React from 'react'


export default function Gif({ url, title}) {
  return (
    <div>
      <img className='image' src={url} alt={title}/>
      <p>{title}</p>
    </div>
    
    )    
}
