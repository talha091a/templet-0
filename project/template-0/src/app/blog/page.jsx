import ContentWrapper from '@/Components/ContentWrapper'
import HeaderBanner from '@/Components/HeaderBanner'
import UnderlinedLink from '@/Components/UnderlinedLink'
import blogPostData from '@/data/blogPosts'
import { Search } from 'lucide-react'
import { Tag } from 'lucide-react'
import { Calendar } from 'lucide-react'
import { User } from 'lucide-react'
import React from 'react'

export default function Page() {
  return (
    <>
      <HeaderBanner
        pageTitle={"Blog"}
      />

      <ContentWrapper>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-6">
          <div className='col-span-2 flex flex-col gap-10'>
            {blogPostData.map((item, index) => {
              return (
                <BlogPost
                  title={item.title}
                  imgUrl={item.imgUrl}
                  datePublished={item.datePublished}
                  tag={item.tag}
                  key={index}
                />
              )
            })}
          </div>
          <div className='flex flex-col gap-6'>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <Search />
            </label>
            <div>
              <h2 className='text-2xl font-semibold mb-6'>Categories</h2>
              <div className='flex flex-col gap-6 *:flex *:justify-between'>
                <div><p>Crafts</p><p>2</p></div>
                <div>
                  <p>Design</p>
                  <p>8</p>
                </div>
                <div>
                  <p>Handmade</p>
                  <p>7</p>
                </div>
                <div>
                  <p>Interior</p>
                  <p>1</p>
                </div>
                <div>
                  <p>Wood</p>
                  <p>6</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-6'>
              <h4 className='text-2xl font-semibold'>Recent Posts</h4>
              {blogPostData.map((item, index)=>{
                return (
                <SmallBlogPost 
                  title={item.title}
                  datePublished={item.datePublished}
                  imgUrl={item.imgUrl}
                  key={index}
                />
              )
              })}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </>
  )
}

function SmallBlogPost({imgUrl, title, datePublished}){
  return (
    <div className='flex gap-3'>
      <img className='rounded-lg w-24 aspect-square' src={`${imgUrl ? imgUrl : "https://placehold.co/64"}`} alt="blog image" />
      <div>
        <h4 className='font-medium'>{`${title ? title : "Blog Title"}`}</h4>
        <p className='text-sm opacity-60'>{`${datePublished ? datePublished : "03 Aug 2022"}`}</p>
      </div>
    </div>
  )
}

function BlogPost({ title, datePublished, tag, imgUrl }) {
  return (
    <section className='flex flex-col gap-4'>
      <div className='rounded-xl overflow-hidden bg-gray-400'>
        <img className='aspect-video w-full object-cover' src={`${imgUrl ? imgUrl : "https://placehold.co/64"}`} alt="blog post image" />
      </div>
      <div className='flex gap-4 opacity-60 text-sm items-center'>
        <p className='flex gap-4'>
          <User />
          Admin
        </p>
        <p className="flex gap-4">
          <Calendar />
          {`${datePublished ? datePublished : "14 Oct 2022"}`}
        </p>
        <p className='flex gap-4'>
          <Tag />
          {`${tag ? tag : "Wood"}`}
        </p>
      </div>
      <h4 className='text-2xl font-semibold'>{`${title ? title : "Blog Title"}`}</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quisquam quae praesentium consectetur, repudiandae accusantium illum velit a numquam quod neque laboriosam minus eligendi sunt placeat et, recusandae in suscipit perferendis. Numquam ab nam officiis, omnis laborum cum hic quos dolorem ut amet deserunt obcaecati unde sed vero ullam? Ratione!</p>
      <UnderlinedLink text={"Read More"} />
    </section>
  )
}