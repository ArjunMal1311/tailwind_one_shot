import React from 'react'
import Heading from './Closures/Heading'
import Footer from './Closures/Footer'

const Border = () => {
    return (
        <div className='p-8 space-y-4'>
            {/* Border */}
            <Heading title="Border" />
            <div className='border-2 rounded-sm w-[250px] h-[250px]'>Rounded Small</div>
            <div className='border-2 rounded w-[250px] h-[250px]'>Rounded Normal</div>
            <div className='border-2 rounded-md w-[250px] h-[250px]'>Rounded Medium</div>
            <div className='border-2 rounded-lg w-[250px] h-[250px]'>Rounded Large</div>
            <div className='border-2 rounded-[200px] w-[250px] h-[250px]'>Rounded Custom</div>
            <Footer />


            {/* Border Width */}
            <Heading title="Border Width" />
            <div className='border-2 rounded-sm w-[250px] h-[250px]'>Border -2</div>
            <div className='border-4 rounded-sm w-[250px] h-[250px]'>Border -4</div>
            <div className='border-8 rounded-sm w-[250px] h-[250px]'>Border -8</div>
            <div className='border-[50px] rounded-sm w-[250px] h-[250px]'>Border - custom</div>
            <Footer />


            {/* Border Color */}
            <Heading title="Border Color" />
            <div className='border-2 rounded-sm border-red-500 w-[250px] h-[250px]'>Border -2</div>
            <Footer />


            {/* Border Style */}
            <Heading title="Border Style" />
            <div className='border border-solid p-4'>
                Border Solid Content
            </div>

            <div className='border border-dashed p-4'>
                Border Dashed Content
            </div>

            <div className='border border-dotted p-4'>
                Border Dotted Content
            </div>

            <div className='border border-double p-4'>
                Border Double Content
            </div>

            <div className='border border-hidden p-4'>
                Border Hidden Content
            </div>

            <div className='border border-none p-4'>
                Border None Content
            </div>
            <Footer />


            {/* Outline Width & Offset */}
            <Heading title="Outline Width & Offset" />
            <div className='outline outline-2 border-2 rounded-sm w-[250px] h-[250px]'>Border -2</div>
            <div className='outline outline-2 outline-offset-4 border-2 rounded-sm w-[250px] h-[250px]'>Border -2</div>
            <Footer />


            {/* Outline color */}
            <Heading title="Outline Color" />
            <div className='outline outline-2 outline-offset-4 outline-[#c63e3e] border-2 rounded-sm w-[250px] h-[250px]'>Border -2</div>
            <Footer />


            {/* Ring */}
            <Heading title="Ring" />
            <div className='ring-8 border-2 rounded-sm w-[250px] h-[250px]'>Border -2</div>
            <Footer />
        </div>
    )
}

export default Border