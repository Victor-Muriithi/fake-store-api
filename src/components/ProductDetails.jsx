import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

import { useParams } from 'react-router-dom';


function ProductDetails() {

  const [data, setData] = useState([])
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
   .then((res) => (setData(res.data)))
  }, [id]);

  return (
    <div className='singleProduct'>
      <h1>{data.title}</h1>
      <img src={data.image} alt="" 
      style={
        {width:'250px', height:'300px'}
      }/>
      <p>{data.description}</p>
      <p>{data.category}</p>
      <p
      style={{
        padding:'5px 10px 5px 10px',
        backgroundColor:'orange',
        width:'fit-content',
        margin:'0 auto',
        marginBottom:'10px',
        borderRadius  : '5px',
      }}>${data.price}</p>

      <button style={{
        backgroundColor:'orange',
        border:'none',
        width:'150px',
        height:'50px',
        borderRadius:'10px',
      }}>Add to Cart</button>


    </div>
  )
}

export default ProductDetails;