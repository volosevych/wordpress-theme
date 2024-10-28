import React from 'react';
import { Element } from 'react-scroll';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { carousel } from '../constants';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
  
  return (
    <Element name="Testimonials">
      <section className="carousel-section py-20 max-lg:py-8">
        <div className='text-center mb-10'>
            <h1 className='text-30 text-blue font-bold'>Huge Global Network of Fast VPN </h1>
            <p className='py-5 text-gray'>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
        </div>
        <div className="carousel-container  mx-auto w-full">
          <Slider {...settings}>
            {carousel.map((item) => (
              <div key={item.id} className="flex justify-between px-6"> {/* Wrapper for justify-between */}
                <div className="carousel-item h-[230px] max-lg:h-[280px] p-8 bg-white rounded-lg shadow-lg flex-grow text-center">
                <div className="flex flex-row items-center justify-between w-full text-center">
                    {/* Left-aligned Photo */}
                    <div className="flex-shrink-0">
                        <img src={item.photo} className="w-12 h-12 object-contain" alt={item.name} />
                    </div>
                    
                    {/* Centered Name and Location */}
                    <div className="flex flex-col text-start mr-auto ml-5">
                        <h3 className="text-18 font-bold">{item.name}</h3>
                        <p className="text-gray-500">{item.location}</p>
                    </div>

                    {/* Right-aligned Star Icon */}
                    <div className="flex-shrink-0 flex flex-row space-x-2">
                        <span>4.5</span>
                        <img src={item.goldStar} alt="rating" className='object-contain' />
                    </div>
                </div>


                  <div className='pt-5 text-start'>
                    <p className="text-gray-700 italic mb-4">{item.comment}</p>
                  </div>
                  
                  
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

    </Element>
  );
};

export default Carousel;
