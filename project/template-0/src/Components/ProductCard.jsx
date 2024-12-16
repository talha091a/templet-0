import React from 'react'

export default function ProductCard({ productTitle, productPrice, imgUrl }) {
  return (
    <div className='flex flex-col items-start gap-2 justify-between'>
      <img className='block max-w-[280px] object-fill' src={`${imgUrl ? imgUrl : "https://placehold.co/240"}`} alt="sofa image" />
      <div>
        <h6>{`${productTitle ? productTitle : "Product Title"}`}</h6>
        <h4 className='text-xl font-semibold'>{`Rs. ${productPrice ? productPrice.toLocaleString() : "000.00"}.00`}</h4>
      </div>
    </div>
  )
}