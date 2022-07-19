import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import './../allComponentsStyles.css'
import { Link } from 'react-router-dom'
import { fetchCategories, selectAllCategories } from './categoriesSlice';

function Category() {
       const dispatch = useDispatch();
       const allCategories = useSelector(selectAllCategories)

       useEffect(()=>{
        dispatch(fetchCategories());
       },[dispatch])

       const renderedCategories = allCategories.map(category=>{
                return <li className='category_ul_li'>
                  <Link to="/" className='category_Link'>{category.name}</Link>
                  </li>
       })

  return (
    <div className='category'>
      <ul className='category_ul'>
         {
            renderedCategories
         }
      </ul>
    </div>
  )
}

export default Category