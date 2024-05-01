"use client" ;

import React,  { useState } from 'react'

export const TodoForm = () => {
  const [value, setValue] = useState("");
  return (
    <form className='TodoFOrm'>
      <input type="text" className='todo-input' placeholder='Yapılacaklar Listesi' onChange={
        (e) => console.log(e.target.value)
      } />
      <button type='submit' className='todo-btn'>Ekle</button>
    </form>
  )
}
