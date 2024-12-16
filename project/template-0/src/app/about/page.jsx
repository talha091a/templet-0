import ContentWrapper from '@/Components/ContentWrapper'
import HeaderBanner from '@/Components/HeaderBanner'
import React from 'react'

export default function Page() {
  return (
    <>
      <HeaderBanner pageTitle={"About"} />
      <ContentWrapper>
        <h2 className='text-4xl font-semibold text-center'>Quality over Quantity</h2>
        <p className='opacity-60 text-center mb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, nostrum.</p>
        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veritatis, earum illo odit nemo provident debitis quibusdam vel, harum libero eaque nobis voluptatibus placeat, dolorum corporis aspernatur odio magnam necessitatibus consequatur ipsam? Totam quo aut, voluptatem nam porro minus ad, voluptatibus deleniti quidem quisquam eveniet. Dignissimos tenetur aspernatur ad! Velit.</p>
        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veritatis, earum illo odit nemo provident debitis quibusdam vel, harum libero eaque nobis voluptatibus placeat, dolorum corporis aspernatur odio magnam necessitatibus consequatur ipsam? Totam quo aut, voluptatem nam porro minus ad, voluptatibus deleniti quidem quisquam eveniet. Dignissimos tenetur aspernatur ad! Velit.</p>
        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veritatis, earum illo odit nemo provident debitis quibusdam vel, harum libero eaque nobis voluptatibus placeat, dolorum corporis aspernatur odio magnam necessitatibus consequatur ipsam? Totam quo aut, voluptatem nam porro minus ad, voluptatibus deleniti quidem quisquam eveniet. Dignissimos tenetur aspernatur ad! Velit.</p>
        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veritatis, earum illo odit nemo provident debitis quibusdam vel, harum libero eaque nobis voluptatibus placeat, dolorum corporis aspernatur odio magnam necessitatibus consequatur ipsam? Totam quo aut, voluptatem nam porro minus ad, voluptatibus deleniti quidem quisquam eveniet. Dignissimos tenetur aspernatur ad! Velit.</p>
      </ContentWrapper>

    </>
  )
}
