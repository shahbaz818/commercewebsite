import React from 'react'

function Search() {
  return (
    <>
    <div>
        <label htmlFor="searchbox">Search Box</label>
        <input type="text" onChange={(e)=>setSearch(e.target.value.toLowerCase())} />
    </div>
    
    </>
  )
}

export default Search