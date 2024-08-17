import React from 'react'

export const TodoItems = ({todo , onDelete}) => {
    
  return (
    <>
    
      <h4 className='pt-4'>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </>
  )
}

