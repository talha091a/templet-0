import React from 'react'
import Breadcrumb from './Breadcrumb'

export default function HeaderBanner({pageTitle, imgUrl}) {
  return (
    <section id='header-banner' className='min-h-[450px] lg:h-[350px] relative py-12 flex flex-col justify-center items-center overflow-hidden'>
      <img className='absolute w-full object-cover -z-10 opacity-40' src={`${imgUrl ? imgUrl : "https://images.unsplash.com/photo-1556909211-36987daf7b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}`} alt="banner image" />
      <img src="/logo.png" alt="" />
      <h2 className='text-4xl font-medium'>{pageTitle}</h2>
      <Breadcrumb currentPageName={pageTitle} />
    </section>
  )
}
