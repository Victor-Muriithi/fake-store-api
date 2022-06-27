import React, {useEffect} from 'react'
import axios from 'axios'
import Product from './product'
import { addproducts } from '../redux/slices/productsReducer'
import { useDispatch, useSelector } from 'react-redux/es/exports'

const url = 'https://fakestoreapi.com/products'

const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector(state=>state.products)
    useEffect(() => {
      axios.get(url).then(res=> dispatch(addproducts(res.data)))
    }, [])
    
  return (
    <div>
      <h4>Products</h4>
      <div className='products'>
        {products? products.map(product=>(<Product product={product} key={product.id}/>)): "Loading..."}
      </div>
    </div>
  )
}

export default Products