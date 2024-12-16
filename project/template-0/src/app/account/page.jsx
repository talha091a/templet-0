import Breadcrumb from '@/Components/Breadcrumb'
import ContentWrapper from '@/Components/ContentWrapper'
import Features from '@/Components/Features'
import HeaderBanner from '@/Components/HeaderBanner'
import React from 'react'

export default function Page() {
  return (
    <>
      <HeaderBanner pageTitle={"My Account"} />
      <ContentWrapper>
        <section className='flex flex-col md:flex-row items-center lg:justify-between gap-40'>
          <div className='w-full lg:w-1/2 flex flex-col gap-4'>
            <h2 className='text-4xl font-semibold'>Login</h2>
            <div className='flex flex-col gap-4'>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Username and Address</span>
                </div>
                <input type="text" className="input input-bordered w-full" />
              </label>

              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <input type="text" className="input input-bordered w-full" />
              </label>

              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-4">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <span className="label-text">Remember me</span>
                </label>
              </div>

              <div>
                <button className='w-1/2 btn btn-outline'>Login</button>
                <button className='w-1/2 btn btn-ghost'>Lost your password?</button>
              </div>
            </div>
          </div>

          <div className='lg:w-1/2 flex gap-4 flex-col justify-between'>
            <div>
              <h2 className='text-4xl font-semibold'>Register</h2>
              <div className='flex flex-col gap-4'>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Username and Address</span>
                  </div>
                  <input type="text" className="input input-bordered w-full max-w-xs" />
                </label>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, alias.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat animi, autem vitae atque maxime doloremque.
                </p>
              </div>
            </div>
            <div><button className='w-full btn lg:btn-wide btn-outline'>Register</button></div>
          </div>
        </section>
      </ContentWrapper>

      <Features />

    </>
  )
}
