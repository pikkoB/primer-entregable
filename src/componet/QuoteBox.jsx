import React, { useState } from 'react';
import quotes from "../quotes.json"


const QuoteBox = () => {
    const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length) )
    const changeUser = () => {
        setIndex(Math.floor(Math.random() * quotes.length));
    }
    
const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "red", "green", "forestgreen", "orangered", "royalblue"]
const randomColor = Math.floor(Math.random () * colors.length)
document.body.style = `background: ${colors[randomColor]}`
    return (
        <div className='contentQuote'>
            <h4 style={{color: colors[randomColor]}} ><i style={{color: colors[randomColor]}} className="fa-solid fa-quote-left"></i> {quotes[index].quote} </h4>
            <h2 style={{color: colors[randomColor]}}>{quotes[index].author} </h2>
            <button style={{background: colors[randomColor]}} onClick={changeUser}><i className="fa-solid fa-angle-right"></i></button>

        </div>
    );
};

export default QuoteBox;