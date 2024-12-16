import React from 'react'

export default function Breadcrumb({ currentPageName }) {
  return (
    <>
      <div className="breadcrumbs text-sm">
        <ul>
          <li><a className='font-bold'>Home</a></li>
          <li><a>{currentPageName}</a></li>
        </ul>
      </div>
    </>
  )
}
