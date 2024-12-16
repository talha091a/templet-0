import Breadcrumb from '@/Components/Breadcrumb'
import HeaderBanner from '@/Components/HeaderBanner'
import React from 'react'

export default function Page() {
  return (
    <>
      <HeaderBanner
        pageTitle={"Checkout"}
        imgUrl={"https://images.unsplash.com/photo-1556909211-36987daf7b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        
      />
      <section className='px-40 py-10'>
        <h2 className='text-2xl font-medium'>Billing Details</h2>
        <section id="checkout-container" className="grid grid-cols-2 gap-8 items-start">
          <BillingForm />
          <div>
            <ProductTotal />
            <div className="divider"></div>
            <PaymentMethod />
          </div>
        </section>
      </section>
    </>
  )
}

function PaymentMethod() {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <p className='flex gap-3 items-center'><span className='block rounded-full w-3 aspect-square bg-black'></span> Direct Bank Transfer</p>
        <p className='text-sm opacity-60'>Make your payment directly into a bank account. Please use your order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-3">
            <input type="radio" name="radio-10" className="radio radio-sm checked:bg-gray-400" defaultChecked />
            <span className="label-text">Direct Bank Transfer</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-3">
            <input type="radio" name="radio-10" className="radio radio-sm checked:bg-gray-400" defaultChecked />
            <span className="label-text">Cash on Delivery</span>
          </label>
        </div>
        <p className='text-sm'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-bold'>privacy policy.</span>
        </p>
        <div className='flex justify-center'><button className='btn btn-outline btn-wide'>Place Order</button></div>
      </div>
    </>
  )
}

function ProductTotal() {
  return (
    <>
      <div className='grid grid-cols-2 gap-4 items-start'>
        <p className='text-lg font-semibold'>Product</p>
        <p className='text-lg font-semibold'>Subtotal</p>
        <p className='text-sm'><span className='opacity-60'>Asgaard</span> x 1</p>
        <p className='text-sm'>Rs. 250,000.00</p>
        <p className='text-sm'>Subtotal</p>
        <p className='text-sm'>Rs. 250,000.00</p>
        <p className='text-sm'>Total</p>
        <p className='text-lg font-bold text-yellow-600'>Rs. 250,000.00</p>
      </div>
    </>
  )
}

function BillingForm() {
  return (
    <>
      <div className='flex flex-col gap-6'>
        <div className='flex gap-3'>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-medium">First Name</span>
            </div>
            <input type="text" className="input input-bordered w-full max-w-xs" />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-medium">Last Name</span>
            </div>
            <input type="text" className="input input-bordered w-full max-w-xs" />
          </label>
        </div>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-medium">Company Name (Optional)</span>
          </div>
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Country / Region</span>
          </div>
          <select className="select select-bordered">
            <option>Pick one</option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
          </select>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-medium">Street Address</span>
          </div>
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-medium">Town/City</span>
          </div>
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Province</span>
          </div>
          <select className="select select-bordered">
            <option>Pick one</option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
          </select>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-medium">ZIP Code</span>
          </div>
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-medium">Phone</span>
          </div>
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-medium">Email Address</span>
          </div>
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </label>

        <input type="text" placeholder='Additional Information' className="input input-bordered w-full max-w-xs" />
      </div>
    </>
  )
}