import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <div class="searchitem">
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    </div>
  )
}
export default Search
