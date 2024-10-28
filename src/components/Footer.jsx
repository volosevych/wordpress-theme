import React from 'react'

const Footer = () => {
  return <footer className='bg-lightGray'>
    <div className="container p-20 max-lg:p-5">
        <div className='flex justify-between max-lg:flex-col-reverse'>
            <div>
                <img src="/assets/logo.png" alt="logo" />
                <p className='text-gray py-5 text-16'> <span className='font-bold'>LaslesVPN</span> is a private virtual network that <br/> has unique features and has high security.</p>

                <div className='flex flex-row space-x-4 pb-5'>
                    {/* Facebook */}
                    <a href="#"><span className='border border-white bg-white rounded-full p-2 flex items-center justify-center w-8 h-8 text-red font-bold hover:bg-red hover:text-white transition-colors duration-500' >f</span></a>
                    {/* Twitter */}
                    <a href="#">
                        <span className='border border-white bg-white rounded-full p-2 flex items-center justify-center w-8 h-8 text-red font-bold hover:bg-red hover:text-white transition-colors duration-500' >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.92 2.199-4.92 4.917 0 .39.045.765.13 1.124-4.087-.205-7.713-2.162-10.141-5.144-.423.722-.666 1.561-.666 2.457 0 1.695.863 3.188 2.173 4.065-.802-.025-1.556-.247-2.215-.616v.062c0 2.368 1.685 4.348 3.918 4.797-.41.111-.84.171-1.285.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.419-1.684 1.32-3.809 2.105-6.115 2.105-.398 0-.79-.023-1.175-.069 2.179 1.396 4.768 2.212 7.548 2.212 9.051 0 14.001-7.498 14.001-13.986 0-.21 0-.42-.015-.63.961-.695 1.8-1.562 2.46-2.549l-.047-.02z"/>
                            </svg>
                        </span>
                    </a>
                    {/* Instagram */}
                    <a href="#">
                        <span class="border border-white bg-white rounded-full p-2 flex items-center justify-center w-8 h-8 text-red font-bold hover:bg-red hover:text-white transition-colors duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.357 3.608 1.332.976.975 1.27 2.242 1.332 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.357 2.633-1.332 3.608-.975.976-2.242 1.27-3.608 1.332-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.357-3.608-1.332-.976-.975-1.27-2.242-1.332-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.062-1.366.357-2.633 1.332-3.608C5.518 2.52 6.785 2.226 8.151 2.163c1.265-.058 1.645-.07 4.849-.07M12 0C8.736 0 8.332.013 7.053.072 5.775.13 4.549.425 3.584 1.39 2.618 2.356 2.322 3.582 2.264 4.86 2.206 6.14 2.193 6.544 2.193 10.807s.013 4.667.072 5.947c.058 1.279.353 2.504 1.319 3.47.965.965 2.191 1.261 3.47 1.319 1.279.058 1.683.072 5.947.072s4.667-.013 5.947-.072c1.279-.058 2.504-.353 3.47-1.319.965-.965 1.261-2.191 1.319-3.47.058-1.279.072-1.683.072-5.947s-.013-4.667-.072-5.947c-.058-1.279-.353-2.504-1.319-3.47-.965-.965-2.191-1.261-3.47-1.319C16.667.013 16.263 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162 18.162 15.403 18.162 12 15.403 5.838 12 5.838zm0 10.324a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zm6.406-11.845a1.005 1.005 0 11-2.01 0 1.005 1.005 0 012.01 0z"/>
                            </svg>
                        </span>
                    </a>
                </div>

                <p className='text-gray'>
                    ©2024LaslesVPN
                </p>
            </div>

            <div className='flex flex-row space-x-20 max-lg:space-x-10 max-lg:pb-10'>
            <div>
                            <h3 className='font-bold'>Product</h3>

                            <ul className='text-gray pt-3 space-y-2'>
                                <li><a href="https://example.com">Download</a></li>
                                <li><a href="https://example.com">Pricing</a></li>
                                <li><a href="https://example.com">Locations</a></li>
                                <li><a href="https://example.com">Server</a></li>
                                <li><a href="https://example.com">Countries</a></li>
                                <li><a href="https://example.com">Blog</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='font-bold'>Engage</h3>

                            <ul className='text-gray pt-3 space-y-2'>
                                <li><a href="https://example.com">LaslesVPN ? </a></li>
                                <li><a href="https://example.com">FAQ</a></li>
                                <li><a href="https://example.com">Tutorials</a></li>
                                <li><a href="https://example.com">About Us</a></li>
                                <li><a href="https://example.com">Privacy Policy</a></li>
                                <li><a href="https://example.com">Terms of Service</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='font-bold'>Earn Money</h3>

                            <ul className='text-gray pt-3 space-y-2'>
                                <li><a href="/">Affiliate</a></li>
                                <li><a href="/">Become Partner</a></li>
                            </ul>
                        </div>
            </div>
            
        </div>
    </div>
  </footer>
}

export default Footer
