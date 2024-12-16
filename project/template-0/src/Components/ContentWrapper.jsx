import React from 'react'

export default function ContentWrapper({ children }) {
  return (
    <div className='px-4 py-20 md:px-20 lg:px-40'>{children}</div>
  )
}
