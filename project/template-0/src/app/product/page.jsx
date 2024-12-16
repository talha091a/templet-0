import ProductCard from '@/Components/ProductCard'
import UnderlinedLink from '@/Components/UnderlinedLink'
import { all_products } from '@/data/products'
import { Plus } from 'lucide-react'
import { Facebook } from 'lucide-react'
import { Twitter } from 'lucide-react'
import { Heart } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Minus } from 'lucide-react'
import { Star } from 'lucide-react'
import React from 'react'

export default function Page() {
  return (
    <>
      <ProductDisplay />
      <ProductDetails />
      <RelatedProducts />
    </>
  )
}

function RelatedProducts() {
  return (
    <div className='px-4 py-10 lg:px-32 flex flex-col items-center gap-10'>
      <h2 className='text-2xl font-semibold text-center'>Related Products</h2>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6'>
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <UnderlinedLink text={"View More"} />
    </div>
  )
}
function ProductDetails() {
  return (
    <div className='py-10 px-4 lg:px-32 flex flex-col gap-6'>
      <div className='flex justify-center gap-8 text-sm md:text-xl'>
        <h4>Description</h4>
        <h4 className='opacity-60'>Additional Information</h4>
        <h4 className='opacity-60'>Reviews [5]</h4>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, voluptatibus. Odit corrupti est hic labore esse recusandae repudiandae dicta illo!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, corrupti? Sunt ipsam fugit sed facere eveniet saepe fugiat corrupti odit excepturi beatae. Corporis laboriosam porro fuga consectetur optio laborum officia, expedita in! Tenetur animi ab vitae, consectetur eveniet aliquid ea?</p>
      <div className='flex flex-col md:flex-row gap-4'>
        <img className='w-full md:w-1/2' src="/all_products/17.png" alt="" />
        <img className='w-full md:w-1/2' src="/all_products/16.png" alt="" />
      </div>
    </div>
  )
}
function ProductDisplay() {
  return (
    <>
      <section className='py-10 px-4 lg:px-32 flex flex-col gap-6 border-b'>
        <div className="breadcrumbs text-sm">
          <ul>
            <li><a>Home</a></li>
            <li><a>Documents</a></li>
            <li>Asgaard Sofa</li>
          </ul>
        </div>

        <section id="product-container" className='grid grid-cols-5 gap-8'>
          <div className='flex flex-col gap-4 w-fit'>
            <img className='w-32 aspect-square' src="/all_products/1.png" alt="product image" />
            <img className='w-32 aspect-square' src="/all_products/2.png" alt="product image" />
            <img className='w-32 aspect-square' src="/all_products/3.png" alt="product image" />
            <img className='w-32 aspect-square' src="/all_products/4.png" alt="product image" />
          </div>
          <div className='col-span-4 lg:col-span-2'>
            <img className='w-full object-fill' src="/all_products/8.png" alt="product image" />
          </div>
          {/* Col 3 */}
          <div className='col-span-5 lg:col-span-2 flex flex-col gap-4'>
            <h2 className='text-4xl font-semibold'>Asgaard Sofa</h2>
            <p className='text-xl opacity-60 font-medium'>Rs. 250, 000.00</p>
            <div className='flex gap-4'>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                <input type="radio" name="rating-2" className="rating-half mask mask-star-2 bg-yellow-500" defaultChecked/>
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
              </div>
              <div className="divider divider-primary"></div>
              <p className='text-sm opacity-60'>5 Customer Review</p>
            </div>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum culpa explicabo minus perferendis delectus repellat autem quas eligendi in amet? Corporis fugiat voluptatem harum velit?</p>
            <div>
              <p className='opacity-60 text-sm'>Size</p>
              <div className='flex gap-3'>
                <button className='btn bg-yellow-200 btn-square'>L</button>
                <button className='btn btn-square'>XL</button>
                <button className='btn btn-square'>XS</button>
              </div>
            </div>
            <div>
              <p className='opacity-60 text-sm'>Color</p>
              <div className='flex gap-3'>
                <div className='btn btn-circle rounded-full bg-purple-500'></div>
                <div className='btn btn-circle rounded-full bg-black'></div>
                <div className='btn btn-circle rounded-full bg-yellow-200'></div>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='w-fit btn btn-outline btn-neutral items-center gap-6'>
                <Minus size={14} />
                <p>1</p>
                <Plus size={14} />
              </div>
              <button className='btn btn-outline font-medium items-center'>Add to Cart</button>
            </div>

            <div className='grid grid-cols-3 opacity-60 mt-6'>
              <p>SKU</p>
              <p>:</p>
              <p>SS001</p>
              <p>Category</p>
              <p>:</p>
              <p>Sofas</p>
              <p>Tags</p>
              <p>:</p>
              <p>Sofa, Chair, Home, Shop</p>
              <p>Share</p>
              <p>:</p>
              <div className='flex justify-between'>
                <div className='flex gap-4'>
                  <Facebook />
                  <Linkedin />
                  <Twitter />
                </div>
                <Heart className='text-red-500' />
              </div>
            </div>
          </div>
        </section>

      </section>

    </>
  )
}