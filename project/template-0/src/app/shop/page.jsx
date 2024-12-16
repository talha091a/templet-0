import Breadcrumb from '@/Components/Breadcrumb'
import Features from '@/Components/Features'
import Footer from '@/Components/Footer'
import HeaderBanner from '@/Components/HeaderBanner'
import ProductCard from '@/Components/ProductCard'
import { all_products } from '@/data/products'
import { GalleryVertical } from 'lucide-react'
import { SlidersHorizontal } from 'lucide-react'
import { Grip } from 'lucide-react'
import React from 'react'

export default function Page() {
  return (
    <>
      <HeaderBanner pageTitle={"Shop"} />
      <nav className='px-4 lg:px-32 py-4 flex flex-col md:flex-row items-center justify-between'>
        <div className='flex flex-row gap-6 items-center'>
          <div className='flex gap-4'>
            <p className='flex gap-2'>
              <SlidersHorizontal />
              Filter
            </p>
            <Grip />
            <GalleryVertical />
          </div>
          <div className="divider"></div>
          <p>Showing 1-16 of 32 Results</p>
        </div>

        <div className='flex gap-6'>
          <div className='flex gap-6'>
            <p>Show</p>
            <p className='opacity-60'>16</p>
          </div>
          <div className='flex gap-6'>
            <p>Sort by</p>
            <p className='opacity-60'>Default</p>
          </div>
        </div>
      </nav>

      <section id='all-products' className='mx-8 flex flex-col items-center gap-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center items-center'>
          {all_products.map((item, index) => {
            return (
              <ProductCard
                productTitle={item.name}
                productPrice={item.price}
                imgUrl={item.imgUrl}
                key={index}
              />
            )
          })}
        </div>
        <div className="join my-8">
          <button className="join-item btn btn-lg btn-active bg-yellow-200 border-none">1</button>
          <button className="join-item btn btn-lg">2</button>
          <button className="join-item btn btn-lg">3</button>
          <button className="join-item btn btn-lg">4</button>
        </div>
      </section>
      <Features />
    </>
  )
}

