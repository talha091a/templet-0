'use client'
import { ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'

export default function CartMenu() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {

  }
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='cursor-pointer'
      >
        <ShoppingCart />
      </button>

      {/* <div
        id="cart-menu"
        className={` ${isOpen ? "block" : "hidden"} absolute top-0 right-0 h-screen w-full bg-black/5`}
      >
        <div className=""></div>
      </div> */}
    </>
  )
}
