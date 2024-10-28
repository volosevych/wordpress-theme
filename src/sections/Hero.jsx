import React from 'react';
import { Element } from 'react-scroll';
import { hero } from '../constants';

const Hero = () => {
  return (
    <Element name="Home">
      <section className="flex items-center justify-center min-h-screen w-full relative">
        <div className="flex justify-between items-center w-full px-4 max-lg:flex-col-reverse">
          {/* Text and Button Section */}
          <div className="flex flex-col text-start items-start">
            <h1 className="text-40 max-lg:text-30 font-semibold">
              Want anything to be <br /> easy with <span className="text-45 max-lg:text-40 font-bold">LaslesVPN.</span>
            </h1>

            <p className="text-gray py-5">
              Provide a network for all your needs with ease and fun using <span className="font-bold">LaslesVPN</span> <br /> discover interesting features from us.
            </p>

            <button
              style={{ boxShadow: '0 10px 40px rgba(245, 56, 56, 0.5), inset 0 80px 40px rgba(245, 56, 56, 0.4)' }}
              className="border border-pink bg-pink text-white py-3 px-12 rounded-xl font-bold shadow-lg max-lg:w-full"
            >
              Get Started
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-end max-lg:justify-center mb-4 max-lg:mb-5">
            <img
              src="/assets/illustrations/illustration-1.png"
              className="w-auto h-auto object-contain"
              alt="illustration"
            />
          </div>
        </div>

        {/* Hero Stats Section */}
        <div className="absolute bottom-5 w-full max-lg:w-full max-lg:h-auto max-lg:px-0">
          <div className="border border-white px-36 py-20 max-lg:px-5 max-lg:py-2 
          max-lg:border-0 max-lg:rounded-lg flex justify-between shadow-lg 
          max-lg:mx-auto max-lg:flex-row max-lg:space-x-4 max-lg:shadow-none">
            {hero.map(({ id, name, image, number }, index) => (
              <div
                key={id}
                className={`relative flex flex-row max-lg:flex-col max-lg:items-center max-lg:text-center items-center space-x-5 ${index !== hero.length - 1 ? 'pr-5' : ''} max-lg:space-x-0 max-lg:space-y-2`}
              >
                {/* Image and Text Content */}
                <div>
                  <img src={image} alt={name} className="max-lg:w-10 max-lg:h-10" />
                </div>

                <div className="flex flex-col">
                  <span className="text-20 text-blue font-bold">{number}</span>
                  <span className="text-gray">{name}</span>
                </div>

                {/* Vertical Line */}
                {index !== hero.length - 1 && (
                  <div
                    className="max-lg:hidden absolute left-full top-1/2 transform -translate-y-1/2 h-[200%] w-[2px] bg-lightGray"
                    style={{ marginLeft: '200px' }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
