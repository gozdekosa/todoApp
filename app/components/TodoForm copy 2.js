"use client" ;

import React,  { useState } from 'react'

export const TodoForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    console.log(value)
  }

  return (
    <form className='TodoFOrm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' placeholder='Yapılacaklar Listesi' onChange={
        (e) => setValue(e.target.value)
      } />
      <button type='submit' className='todo-btn'>Ekle</button>
    </form>
  )
}
