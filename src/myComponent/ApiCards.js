import React, { useEffect, useState } from 'react'
import './ApiCards.css'
const ApiCards = (props) => {
   const[fake,setfake] = useState([]);
   useEffect(()=>{
    fetchData();
   },[])
  const urlToFech = 'https://fakestoreapi.com/products';
  async function fetchData(){
    const result = (await fetch(urlToFech)).json()
    const data = await result;
    setfake(data);
  }
 
  return (
    <div className='apiCardsContainer'>
      <h1 className='apiCardsTitle'>
        {fake?.length? props.title:"wait a while"}
      </h1>
      {fake?.map((value)=>{
        console.log(value)
        return (
          <>
            <div className='carding'>
            <h4 className='headinghaibhai'>{value.title}</h4>
            <p className='discription'>{value.description}</p>
            <img className="imagehaibhai" src={value.image}/>
            <p className='pricehaibhai'>{value.price}/-</p>
            </div>
          </>
        )
      }
    )}
    </div>
  )
}

export default ApiCards






