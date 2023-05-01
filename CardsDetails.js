import { height, width } from '@mui/system'
import React,{useEffect, useState} from 'react'
import Table from 'react-bootstrap/Navbar'
const CardaDetails = () => {
  return (
    <>
    <div className="container mt-2">
      <h2 className='text-center'>Items Details Page
      </h2>
      <section className='container mt-3'>
      <div className='itemsDetails'>
        <div className='items_img'>
        <img src="https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b_o2_featured_v2.jpg?output-format=webp" alt='' />
        </div>
      
      <div className="Details" >
        <Table >
          <tr>
            <td>
              <p> <strong >Restaurent</strong>: Massala Theoryy</p>
              <p> <strong>price</strong>: ₹ 300</p>
              <p> <strong>Dishes</strong>: North Indian, Biryani, Mughlai</p>
              <p> <strong>Total</strong>: ₹ 300</p>
            </td>
            <td>
             
          <p><strong>Rating :</strong><span style={{background:"green",color:"#fff,padding:2px 5px",borderRadius:"5px"}}>3.5 ★ </span></p>
          <p><strong>Order Review :</strong><span >1175 + Order Review from here recently </span></p>
          <p><strong>Remove :</strong><span><i className='fas fa-trash' style={{color:"red",fontSize:20,cursor:'pointer'}}></i></span></p>
            </td>
          </tr>
        </Table>
      </div>
      </div>
      </section>
    </div>
    </>
  )
}

export default CardaDetails
