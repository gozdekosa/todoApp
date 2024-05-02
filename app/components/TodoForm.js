"use client" ;

import React,  { useState } from 'react'

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value);

    setValue("")
  }

  return (
    <form className='TodoFOrm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' placeholder='Yapılacaklar Listesi' value={value} onChange={
        (e) => setValue(e.target.value)
      } />
      <button type='submit' className='todo-btn'>Ekle</button>
    </form>
  )
}
