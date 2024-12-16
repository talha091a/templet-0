import ContentWrapper from '@/Components/ContentWrapper'
import Features from '@/Components/Features'
import HeaderBanner from '@/Components/HeaderBanner'
import { Clock } from 'lucide-react'
import { Phone } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { MapIcon } from 'lucide-react'
import React from 'react'

export default function Page() {
  return (
    <>
      <HeaderBanner pageTitle={"Contact"} />
      <ContentWrapper>
        <h1 className='text-4xl font-semibold text-center'>Get in touch with us</h1>
        <p className='opacity-60 text-sm mb-20 text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-around lg:flex-row gap-20">
          <div className='col-span-1 flex flex-col gap-8'>
            <div className='flex gap-4'>
              <MapPin />
              <div>
                <h4 className='text-xl font-semibold'>Address</h4>
                <p>235 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone />
              <div>
                <h4 className='text-xl font-semibold'>Phone</h4>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock />
              <div>
                <h4 className='text-xl font-semibold'>Working Time</h4>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>

          </div>
          <div className='col-span-2 flex flex-col gap-4'>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Your name</span>
              </div>
              <input type="text" placeholder="Abc" className="input input-bordered w-full" />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email address</span>
              </div>
              <input type="text" placeholder="Abc@email.com" className="input input-bordered w-full" />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Subject</span>
              </div>
              <input type="text" placeholder="This is an option" className="input input-bordered w-full" />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Message</span>
              </div>
              <input type="text" placeholder="Hi! I'd like to ask about" className="input input-bordered w-full" />
            </label>
            <button className='btn btn-outline btn-wide'>Submit</button>
          </div>
        </div>
      </ContentWrapper>
      <Features />
    </>
  )
}
