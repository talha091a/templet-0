import Link from 'next/link'
import React from 'react'

export default function UnderlinedLink({text, link, style}) {
  return (
    <>
      <Link className={`${style ? style : ""} text-xl font-medium link underline-offset-8`} href={`${link ? link : "#"}`}>{text}</Link>
    </>
  )
}
