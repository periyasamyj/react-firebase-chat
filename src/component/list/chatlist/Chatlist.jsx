import React, { useState } from 'react'
import "./chatlist.css"

const Chatlist = () => {
    const [addmode,setaddmode]=useState(true);
  return (
    <div className='chatlist'>
        <div className='search'>
            <div className="searchbar">
            <img src="./search.png" alt="" />
            <input type="text" placeholder='Search' />
            </div>
            <img src={addmode ? "./plus.png":"./minus.png"} alt=""  className='add'
            onClick={()=>setaddmode(!addmode)}/>   
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>John doe</span>
                <p>hi hello</p>
            </div>
        </div>

        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>John doe</span>
                <p>hi hello</p>
            </div>
        </div>

        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>John doe</span>
                <p>hi hello</p>
            </div>
        </div>

        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>John doe</span>
                <p>hi hello</p>
            </div>
        </div>

        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>John doe</span>
                <p>hi hello</p>
            </div>
        </div>

        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>John doe</span>
                <p>hi hello</p>
            </div>
        </div>
    </div>
  )
}

export default Chatlist