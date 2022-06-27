import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SideBar = () => {

    const [categories, setcategories] = useState(null)

    useEffect(() => {
      axios.get('https://fakestoreapi.com/products/categories').then(res=>{
        setcategories(res.data)
      })
    }, [])
    
  return (
    <div className='sidebar'>
      <h4>Categories</h4>
        <div className="categories">
          <Link to='/'>
          <p style={{textDecoration:'none'}}>All</p>
          </Link>
        {categories? categories.map(category=>(<Link to={`/${category}`} key={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link>)): 'Loading'}
        </div>
    </div>
  )
}

export default SideBar