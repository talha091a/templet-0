import React from 'react'
import ContentWrapper from './ContentWrapper'

export default function Features() {
  return (
    <>
      <ContentWrapper>
        <section id='features' className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div>
            <h2 className='font-semibold text-4xl mb-4'>Free Delivery</h2>
            <p className='text-sm opacity-60'>For all orders over $50, Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h2 className='font-semibold text-4xl mb-4'>90 Days Return</h2>
            <p className='text-sm opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam, deserunt commodi id sed aperiam?</p>
          </div>
          <div>
            <h2 className='font-semibold text-4xl mb-4'>Secure Payment</h2>
            <p className='text-sm opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam, deserunt commodi id sed aperiam?</p>
          </div>
        </section>
      </ContentWrapper>
    </>
  )
}
