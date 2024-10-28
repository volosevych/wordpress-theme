import React from 'react'
import { Element } from 'react-scroll'
import { features } from '../constants'

const Features = () => {
  return <Element name="Features">
    <section className='flex items-center justify-center min-h-screen w-full max-lg:relative'>
        <div className='w-full max-lg:absolute max-lg:bottom-5 max-lg:px-4'>
          {features.map((featureGroup, index) => (
            <div key={index} className='flex justify-between items-center max-lg:flex-col'>
              <div className='max-lg:pb-3'>
                  <img src="/assets/illustrations/illustration-2.png" alt="" />
                </div>
              <div>
              {featureGroup.title.split('\n').map((line, idx) => (
                  <h2 key={idx} className="text-40 max-lg:text-30 text-blue font-bold">{line}</h2>
                ))}
                <div className='pt-5'/>
                  {featureGroup.description.split('\n').map((line, idx) => (
                  <p key={idx} className="text-gray">{line}</p>
                ))}
                <div className='pb-5'/>
                <ul className="flex flex-col ">
                  {featureGroup.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center space-x-2 py-3 text-gray"
                    >
                      <img src="/assets/icons/greenCheck.png" alt="feature icon" className="w-5 h-5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
                

                
            </div>
          ))}
        </div>
    </section>
  </Element>
}

export default Features
