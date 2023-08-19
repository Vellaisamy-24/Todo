import React from 'react'

const Content = ({items,setItems,handleChange,handleDelete}) => {
    
  return (
    <div class="Details">
        {items.length?
           
            items.map((item)=>
            (
        <h3 key={item.id}>
            <input type="checkbox" checked={item.checked} onChange={(e)=>handleChange(item.id)} />
            <label>{item.des}</label>
            <button class="delete" onClick={(e)=>handleDelete(item.id)}>Delete</button>
           
        </h3>
        
            ))
           
        : <h2 class="default">0 List Items</h2>}
 


    </div>
  )
}
export  default Content
