import React from 'react'
import  {TodoItems}  from "./TodoItems";

const Todos = (props) => {
  let FooterStyle={
    minHeight : '60vh',
  }
  return (
    <div className='container my-3' style={FooterStyle}>
      <h3 className='my-3'>My Todos list  </h3>
      
       {props.todos.length===0? "No List To display || List is Empty ":
        props.todos.map((todo)=>{
        return (<><TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr/> </>)
      })}
    </div>
  )
}

export default Todos
