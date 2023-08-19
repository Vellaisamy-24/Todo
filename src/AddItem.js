import React from 'react'

 const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <div class="additem">
        <form onSubmit={handleSubmit} className="addform">
            <input type="text" value={newItem} placeholder="Add" onChange={(e)=>setNewItem(e.target.value)}/>
            <button type="submit" >Add Details</button>
            
        </form>
    </div>
  )
}
export default AddItem
