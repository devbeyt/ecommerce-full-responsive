import React from 'react'
import {BsSearch} from 'react-icons/bs'

function Search({searchStyle}) {


  return (<div className='search_container'>
     <input type="search" placeholder="Axtaris edin..." className={`${searchStyle}`}/>
  <BsSearch className={`search_btn nav_icon`} />
  </div>
  )
}

export default Search