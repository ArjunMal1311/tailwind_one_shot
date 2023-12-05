import React from 'react';
import Heading from './Closures/Heading';
import Footer from './Closures/Footer';

const Transitions = () => {
    return (
        <div className='p-8 space-y-8'>
            {/* Transition */}
            <Heading title="Transitions" />
            <div className='transition duration-1000 border-2 w-fit px-3 py-2 hover:bg-gray-400'>
                Hello
            </div>
            <Footer />

            {/* Transition Timing Functions */}
            <Heading title="Transition Timing Functions" />
            <div className="p-4 mb-4 w-fit bg-white rounded-md transition-transform ease-linear duration-1000 transform translate-x-[40px]">
                Element with Linear Transition (ease-linear)
            </div>

            <div className="p-4 mb-4 w-fit bg-white rounded-md transition-transform ease-in duration-1000 transform translate-x-[40px]">
                Element with Ease In Transition (ease-in)
            </div>

            <div className="p-4 mb-4 w-fit bg-white rounded-md transition-transform ease-out duration-1000 transform translate-x-[40px]">
                Element with Ease Out Transition (ease-out)
            </div>

            <div className="p-4 mb-4 w-fit bg-white rounded-md transition-transform ease-in-out duration-1000 transform translate-x-[40px]">
                Element with Ease In Out Transition (ease-in-out)
            </div>
            <Footer />


            {/* Animation */}
            <Heading title="Spin Animation" />
            <div className='h-8 w-8 animate-spin'>
                Spin
            </div>

            <div className='h-8 w-8 animate-ping'>
                Ping
            </div>

            <div className='h-8 w-8 animate-pulse'>
                Pulse
            </div>

            <div className='h-8 w-8 animate-bounce'>
                Bounce
            </div>
            <Footer />
        </div>
    );
};

export default Transitions;
