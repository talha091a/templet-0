import ContentWrapper from '@/Components/ContentWrapper'
import Footer from '@/Components/Footer'
import UnderlinedLink from '@/Components/UnderlinedLink'
import { Calendar } from 'lucide-react'
import { Clock } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <>
      <section className='px-4 py-20 h-[580px] lg:h-screen flex flex-col-reverse md:flex-row justify-center lg:justify-evenly items-center gap-4 bg-yellow-100' id="hero">
        <div className='flex flex-col gap-4'>
          <h2 className='text-4xl md:text-5xl font-semibold'>Rocket Single Seater</h2>
          <Link className='link underline-offset-8' href={"#"}>Shop Now</Link>
        </div>
        <div className='flex flex-col'>
          <img className='object-contain w-full max-h-[350px] md:max-w-[480px]' src="/homepage/1.png" alt="image" />
        </div>
      </section>
      <section id="2-prod-feature" className='flex flex-col-reverse md:flex-row py-6 gap-3 justify-around'>
        <div className='p-6 flex flex-col gap-3'>
          <img className='mx-auto max-w-[280px] aspect-square object-fill' src="/homepage/1.png" alt="image" />
          <h4 className='text-2xl font-medium'>Rocket Single Seater</h4>
          <Link className='link underline-offset-8' href={"#"}>View More</Link>
        </div>
        <div className='p-6 flex flex-col gap-3'>
          <img className='mx-auto max-w-[280px] aspect-square object-fill' src="/homepage/2.png" alt="image" />
          <h4 className='text-2xl font-medium'>Side Table</h4>
          <Link className='link underline-offset-8' href={"#"}>View More</Link>
        </div>
      </section>

      <ContentWrapper id="top-picks">
        <h2 className='text-center text-4xl font-medium'>Top Picks for You</h2>
        <p className='pb-10 text-center opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore sint maxime autem itaque dolor!</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-around'>
          {/* Top picks Item 1 */}
          <div className='flex flex-col items-start gap-2'>
            <img className='mx-auto w-[280px] aspect-square object-contain' src="/homepage/3.png" alt="sofa image" />
            <h6>Trenton Modular Sofa 3</h6>
            <h4 className='text-xl font-semibold'>Rs. 25,000.00</h4>
          </div>
          {/* Top picks Item 2 */}
          <div className='flex flex-col items-start gap-2'>
            <img className='mx-auto w-[280px] aspect-square object-contain' src="/homepage/4.png" alt="sofa image" />
            <h6>Trenton Modular Sofa 3</h6>
            <h4 className='text-xl font-semibold'>Rs. 25,000.00</h4>
          </div>
          {/* Top picks Item 3 */}
          <div className='flex flex-col items-start gap-2'>
            <img className='mx-auto w-[280px] aspect-square object-contain' src="/homepage/5.png" alt="sofa image" />
            <h6>Trenton Modular Sofa 3</h6>
            <h4 className='text-xl font-semibold'>Rs. 25,000.00</h4>
          </div>
          {/* Top picks Item 4 */}
          <div className='flex flex-col items-start gap-2'>
            <img className='mx-auto w-[280px] aspect-square object-contain' src="/homepage/6.png" alt="sofa image" />
            <h6>Trenton Modular Sofa 3</h6>
            <h4 className='text-xl font-semibold'>Rs. 25,000.00</h4>
          </div>
        </div>
        <div className='flex justify-center mt-10'>
          <UnderlinedLink text={"View More"} />
        </div>
      </ContentWrapper>


      <section id='new-arrivals' className='px-4 lg:px-32 py-8 flex flex-col-reverse md:grid md:grid-cols-3'>
        <img className='w-full object-cover col-span-2' src="/homepage/8.png" alt="big sofa image" />
        <div className='flex flex-col items-center justify-center gap-4'>
          <p className='font-medium'>New Arrivals</p>
          <h4 className='text-4xl font-bold'>Asgaard Sofa</h4>
          <Link className='btn btn-outline btn-wide' href={"#"}>Order Now</Link>
        </div>
      </section>

      <ContentWrapper>
        <section id='blog' className='flex flex-col items-center gap-6'>
          <h4 className='text-4xl font-bold'>Our Blogs</h4>
          <p className='text-center opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore sint maxime autem itaque dolor!</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <BlogPost imgUrl={"/blog/1.png"} />
            <BlogPost imgUrl={"/blog/2.png"} />
            <BlogPost imgUrl={"/blog/3.png"} />
          </div>
          <UnderlinedLink text={"View More"} />
        </section>
      </ContentWrapper>

      <section id='social' className='flex flex-col justify-center items-center relative overflow-hidden py-20'>
        <img
          className='w-full absolute -z-10 opacity-30'
          src="https://images.unsplash.com/photo-1530762312300-888baa333d74?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className='flex flex-col gap-3'>
          <h2 className='font-bold text-4xl'>Our Instagram</h2>
          <p className='text-center'>Follow us on Instagram.</p>
          <button className='btn rounded-full shadow-2xl btn-wide'>Follow Us</button>
        </div>
      </section>
    </>
  )
}

function BlogPost({ props, imgUrl }) {
  return (
    <>
      <div className='flex flex-col gap-3 items-center'>
        <img className='rounded-md w-full' src={`${imgUrl ? imgUrl : "https://placehold.co/240}"}`} alt="" />
        <p className='text-center'>Going all-in with millennial design.</p>
        <Link className='text-xl font-medium link underline-offset-8' href={"#"}>Read More</Link>
        <div className='py-3 flex gap-3'>
          <span className='flex gap-2 items-center text-sm'><Clock size={14} /><p>5 min</p></span>
          <span className='flex gap-2 items-center text-sm'><Calendar size={14} /><p>12th Oct 2022</p></span>
        </div>
      </div>
    </>
  )
}