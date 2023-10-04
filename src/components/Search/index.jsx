import { React, useState } from 'react'

import "./Search.css"
import "../components.css"

const Search = ({ setSearch }) => {

  const [searchValue, setSearchValue] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(searchValue)
  }
    
  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="Search" id="search-input" value={searchValue} aria-label="search"></input>
    </form>
  )
}

export default Search