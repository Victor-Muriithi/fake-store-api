import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Product from './product'
import { addProductsCategory, deleteCatProduct } from '../redux/slices/categoryReducer'
import { useDispatch, useSelector } from 'react-redux'

const CategoryProducts = () => {

  const dispatch = useDispatch()
    const params = useParams()
    let {category} = params
    const products = useSelector(state => state.category)
    
    useEffect(() => {
      dispatch(deleteCatProduct)
      axios.get(`https://fakestoreapi.com/products/category/${category}`).then(res=>{dispatch(addProductsCategory(res.data))
    })
    }, [category])
    
  return (
    <div className="categoryProducts">
      <h4>{ category.charAt(0).toUpperCase() + category.slice(1) }</h4>
      <div className='products'>
        {products.length? products.map(product=>(<Product key={product.id}product={product}/>)): 'Loading...'}
    </div>
    </div>
  )
}

export default CategoryProducts