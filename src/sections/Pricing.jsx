import React from 'react';
import { Element } from 'react-scroll';
import { pricing } from '../constants';

const Pricing = () => {
  return <Element name="Pricing">
    <section className='flex flex-col items-center justify-center min-h-screen w-full max-lg:relative'>
        <div className='flex text-center flex-col pb-20 max-lg:pb-5 max-lg:absolute max-lg:top-28'>
            <h1 className='text-30 text-blue font-bold'> 
                Choose Your Plan
            </h1>

            <p className='py-5 text-gray'>
            Let's choose the package that is best for you and explore it happily and cheerfully.
            </p>
        </div>

        <div className="flex max-md:overflow-x-auto scrollbar-none w-full max-md:flex-nowrap md:flex-wrap max-md:snap-x max-md:snap-mandatory pl-4 pr-4 md:justify-between max-lg:space-x-5 max-lg:absolute max-lg:bottom-5">
  {pricing.map((plan) => (
    <div 
      key={plan.id} 
      className="border border-lightGray p-14 max-lg:p-5 rounded-xl shadow relative max-md:w-80 md:w-auto flex-shrink-0 max-md:snap-center mx-auto"
    >
      {/* Image and Title */}
      <div className="flex flex-col items-center text-center mb-8">
        <img src={plan.img} alt={plan.title} className="mb-4" />
        <span className="text-20 max-lg:text-18 text-blue font-semibold">{plan.title}</span>
      </div>

      {/* Features List */}
      <div className="space-y-3 pb-28 max-md:text-center max-md:flex max-md:flex-col">
  {plan.pricingFeatures.map((feature, index) => (
    <li key={index} className="flex max-md:justify-center items-center space-x-2">
      <img className="max-lg:hidden" src="/assets/icons/whiteCheck.png" alt="" />
      <span className="max-lg:text-14">{feature}</span>
    </li>
  ))}
</div>

      {/* Price and Button */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center flex flex-col">
        <span className="font-bold text-18">
          {plan.price} 
          {plan.id === '1' || plan.id === '2' ? (
            <span className="text-gray"> / mo</span>
          ) : ''}
        </span>

        <button className="border border-red px-10 py-2 
          rounded-3xl mt-5 text-red font-bold hover:bg-red hover:text-white transition-colors duration-500">
          {plan.btn}
        </button>
      </div>
    </div>
  ))}
</div>







    </section>
  </Element>
}

export default Pricing