import React from 'react'
import "./list.css"
import Userinfo from './userinformation/userinfo'
import Chatlist from './chatlist/Chatlist'

const List = () => {
  return (
    <div className='list'>

        <Userinfo />
        <Chatlist />
    </div>
  )
}

export default List