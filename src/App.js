import React from 'react';
import {useState,useEffect} from 'react';
import './App.css';
import Content from './Content';
import AddItem from './AddItem';
import Search from './Search';
import Header from './Header';
function App() {
  const [items,setItems]=useState([])
  const [newItem,setNewItem]=useState("");
  useEffect(()=>
  {
    JSON.parse(localStorage.getItem("todo"),[])
  })
  function addItem(des) 
  {
    const id=items.length? items[items.length-1].id+1 :1;
    const addNewItem={id,checked:false,des};
    const listItems=[...items,addNewItem];
    setItems(listItems);
    localStorage.setItem("todo",JSON.stringify(listItems));
  }
  function handleChange(id)
  {
      const listItems=items.map((item)=>item.id===id ? {...item,checked:!item.checked} : item);
      setItems(listItems);
      localStorage.setItem("todo",JSON.stringify(listItems));
  }

 function handleSubmit(e)
 {
 e. preventDefault();
 if(!newItem) return;
 //console.log(newItem);
 addItem(newItem);
 setNewItem("");
}
function handleDelete(id)
{
  const listItems=items.filter((item)=>item.id!==id);
  setItems(listItems);
  localStorage.setItem("todo",JSON.stringify(listItems));
}
 const [search,setSearch]=useState("")

  return (
    <div className="App">
      <Header title="ToDo Activity"/>
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
      <Search search={search} setSearch={setSearch}/>
      <Content items={items.filter((item)=>((item.des).toLowerCase()).includes(search.toLowerCase()))} setItems={setItems} handleChange={handleChange} 
      handleDelete={handleDelete}/>
      
    </div>
  );
}

export default App;
