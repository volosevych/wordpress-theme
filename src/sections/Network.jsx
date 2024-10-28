import React from 'react';
import { network } from '../constants';

const Network = () => {
  return <section className='flex flex-col items-center justify-center min-h-screen w-full pt-20'>
    <div className='text-center'>
        <h1 className='text-30 text-blue font-bold'>Huge Global Network of Fast VPN </h1>
        <p className='py-5 text-gray'>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
    </div>

    <div className='py-20'>
        <img src="/assets/illustrations/hugeGlobal.png" className='h-auto w-auto object-contain' alt="" />
    </div>

    <div className="flex justify-between flex-row w-full flex-wrap gap-4  overflow-hidden md:overflow-visible max-md:overflow-x-auto max-md:flex-nowrap max-md:scrollbar-none">
      {Object.entries(network[0]).map(([name, src]) => (
        <img key={name} src={src} alt={`${name} logo`} className="object-contain w-32 h-auto" loading="lazy" />
      ))}
    </div>

  </section>
}

export default Network
