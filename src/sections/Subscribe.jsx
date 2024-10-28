import React from 'react'

const Subscribe = () => {
  return <section className='max-w-[1000px] mx-auto py-14'>
    <div className='border border-white shadow-xl p-14 rounded-xl flex justify-between items-center max-lg:flex-col'>
        <div className=''>
            <h1 className='text-40 max-lg:text-30 font-bold text-blue'>Subscribe Now for <br/> Get Special Features!</h1>
            <p className='py-5 text-gray'>Let's subscribe with us and find the fun.</p>
        </div>

        <div>
            <button className='border border-red text-white bg-red px-12 py-3 font-bold rounded-xl hover:bg-white hover:text-red transition-colors duration-500'>Subscribe Now</button>
        </div>
    </div>
  </section>
}

export default Subscribe
