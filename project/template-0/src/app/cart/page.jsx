import ContentWrapper from '@/Components/ContentWrapper'
import Features from '@/Components/Features'
import HeaderBanner from '@/Components/HeaderBanner'
import { Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <>
      <HeaderBanner pageTitle={"Cart"} />
      <ContentWrapper>
        <div className='grid grid-cols-4'>
          <div className="col-span-3 grid grid-cols-6 items-center gap-4">
            {/* Col 1 */}

            {['', "Product", "Price", "Quantity", "Subtotal", ""].map((item, key) => {
              return (<p key={key} className='font-bold'>{item}</p>)
            })}
            {/* Col 2 */}
            <img className='rounded-md bg-yellow-200' src="/all_products/8.png" alt="image" />
            <p>Asgaard Sofa</p>
            <p className='opacity-60'>Rs. 250,000</p>
            <button className='btn btn-outline btn-square'>1</button>
            <p>Rs. 250,000</p>
            <Trash />
          </div>

          <div>
            <h2 className='font-bold text-xl text-center mb-4'>Cart Total</h2>
            <div className='grid grid-cols-2 gap-4'>
              <p className="font-bold text-sm">Subtotal</p>
              <p className='text-sm opacity-60'>Rs. 250,000.00</p>
              <p className="font-bold text-sm">Total</p>
              <p className='text-yellow-600 font-semibold text-lg'>Rs. 250,000.00</p>
              <Link href={"/checkout"} className='btn btn-outline btn-wide'>Checkout</Link>
            </div>
          </div>
        </div>
      </ContentWrapper>
      <Features />
    </>
  )
}
