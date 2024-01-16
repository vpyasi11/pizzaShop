import React from 'react'

function adminpanel() {
  return (
    <>
        <div className='flex w-max '>
            <div className='w-1/4 border-solid'>order placed</div>
            <div className='w-1/4 border-solid'>order in making</div>
            <div className='w-1/4 border-solid'>order ready</div>
            <div className='w-1/4 border-solid'>order picked</div>
        </div>
    </>
  )
}

export default adminpanel