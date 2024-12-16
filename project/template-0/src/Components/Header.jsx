import { Search } from 'lucide-react'
import { Heart } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import { User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import CartMenu from './CartMenu'

export default function Header() {
  return (
    <>
      <section id='header-wrapper' className=''>
        <header className='p-4 lg:px-32 py-4 grid grid-cols-1 md:grid-cols-3 justify-center items-center'>
          <div className='flex justify-center lg:justify-start'>
            <Link href={"/"}>
            <img className='w-12 aspect-square' src="/logo.png" alt="brand logo" />
            </Link>
          </div>
          <nav className='flex justify-center items-center'>
            <Link className='btn btn-ghost' href={"/"}>Home</Link>
            <Link className='btn btn-ghost' href={"/shop"}>Shop</Link>
            <Link className='btn btn-ghost' href={"/about"}>About</Link>
            <Link className='btn btn-ghost' href={"/contact"}>Contact</Link>
            <Link className='btn btn-ghost' href={"/blog"}>Blog</Link>
          </nav>
          <div className='flex gap-6 justify-center md:justify-end'>
            <Link href={"/account"}><User /></Link>
            <Search />
            <Heart />
            <Link href={"/cart"}><CartMenu /></Link>
          </div>
        </header>
      </section>
    </>
  )
}
