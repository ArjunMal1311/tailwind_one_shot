import React from 'react'
import Heading from './Closures/Heading'
import Footer from './Closures/Footer'

const Transform = () => {
    return (
        <div className='px-20 space-y-10'>
            {/* Scale */}
            <Heading title="Scale" />
            <div>
                <div className='bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")] border-2 h-[250px] w-[200px] bg-no-repeat scale-75'></div>
                <div>Scale 75</div>
            </div>

            <div>
                <div className='bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")] border-2 h-[250px] w-[200px] bg-no-repeat scale-100'></div>
                <div>Scale 100</div>
            </div>

            <div>
                <div className='bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")] border-2 h-[250px] w-[200px] bg-no-repeat scale-125'></div>
                <div>Scale 125</div>
            </div>

            <div>
                <div className='bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")] border-2 h-[250px] w-[200px] bg-no-repeat scale-x-150'></div>
                <div className='p-8'>Scale X 150</div>
            </div>

            <div>
                <div className='bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")] border-2 h-[250px] w-[200px] bg-no-repeat scale-y-150'></div>
                <div>Scale Y 150</div>
            </div>
            <Footer />


            {/* Rotate */}
            <Heading title="Rotate" />
            <div>
                <div className='bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")] border-2 h-[250px] w-[200px] bg-no-repeat rotate-0'></div>
                <div>Rotate 0</div>
            </div>

            <div>
                <div className='bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")] border-2 h-[250px] w-[200px] bg-no-repeat rotate-45'></div>
                <div>Rotate 45</div>
            </div>

            <div>
                <div className='bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")] border-2 h-[250px] w-[200px] bg-no-repeat -rotate-45'></div>
                <div>Rotate -45</div>
            </div>

            <div>
                <div className='bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")] border-2 h-[250px] w-[200px] bg-no-repeat rotate-90'></div>
                <div>Rotate 90</div>
            </div>

            <div>
                <div className='bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")] border-2 h-[250px] w-[200px] bg-no-repeat -rotate-90'></div>
                <div>Rotate -90</div>
            </div>

            <div>
                <div className='bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")] border-2 h-[250px] w-[200px] bg-no-repeat rotate-180'></div>
                <div>Rotate 180</div>
            </div>

            <div>
                <div className='bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")] border-2 h-[250px] w-[200px] bg-no-repeat -rotate-180'></div>
                <div>Rotate -180</div>
            </div>
            <Footer />

            {/* Translate */}
            <Heading title="Translate Transformations" />
            <div className='translate-x-2 border-t mt-4'>
                Transform X by 0.5rem (translate-x-2)
            </div>

            <div className='translate-y-2 border-t mt-4'>
                Transform Y by 0.5rem (translate-y-2)
            </div>
            <Footer />


            {/* Skew */}
            <Heading title="Skew Transformations" />
            <div>
                <div className='bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")] border-2 h-[250px] w-[200px] bg-no-repeat skew-x-6'></div>
                <div>Skew-x-6</div>
            </div>

            <div>
                <div className='bg-[url("https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png")] border-2 h-[250px] w-[200px] bg-no-repeat skew-y-6'></div>
                <div>Skew-y-6</div>
            </div>
            <Footer />
        </div>
    )
}

export default Transform