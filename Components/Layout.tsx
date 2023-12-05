import React from 'react'
import Heading from './Closures/Heading'
import Footer from './Closures/Footer'

const Layout = () => {
    return (
        <div className='p-8 space-y-10'>
            <Heading title="Display" />
            <div className='block border p-2'>
                Block Content
            </div>

            <span className='inline-block border p-2'>
                Inline-Block Content
            </span>

            <span className='inline border p-2'>
                Inline Content
            </span>

            <div className='flex border p-2'>
                <div className='flex-1 p-2'>Flex Item 1</div>
                <div className='flex-1 p-2'>Flex Item 2</div>
                <div className='flex-1 p-2'>Flex Item 3</div>
            </div>
            <Footer />


            {/* Overflow */}
            <Heading title="Overflow" />
            <div className='border p-4 overflow-auto  h-[50px] w-full'>
                (Overflow Auto) Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptatem quo eveniet explicabo. Eum aut tempore officiis eveniet at veritatis placeat dignissimos deserunt consectetur, vero rem laborum! Consequatur ratione repudiandae sit placeat minima ut a quos optio provident. Molestias officia eos exercitationem odit corrupti aliquid ab saepe enim, et quasi natus voluptatem voluptatibus, iste delectus excepturi tenetur. Minus saepe animi laborum! Doloribus veniam explicabo sit soluta ducimus. Labore laboriosam hic necessitatibus ab molestias a quod quae nulla neque aspernatur, illum iure eaque cum delectus pariatur error ipsam eveniet accusamus omnis itaque dolore maxime ut! Voluptatem delectus modi at ex eius.
            </div>

            <div className='border p-4 overflow-hidden h-[50px] w-full'>
                (Overflow Hidden) Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti quo odit sapiente rem quisquam numquam eum consequatur. Ratione vel, iste quas nostrum enim inventore asperiores id facilis aspernatur obcaecati tenetur incidunt velit voluptatem! Incidunt, adipisci aut voluptate velit excepturi a eligendi libero fuga quia doloremque, odio quasi ipsa labore voluptatibus ea ratione saepe deserunt dolor error, magnam odit itaque mollitia. Aperiam impedit veniam nostrum voluptates id praesentium animi quibusdam, fugit quisquam deserunt natus voluptatibus veritatis cupiditate, numquam, voluptatum rem tempora beatae? Voluptatem at, dolore ullam perferendis animi esse delectus porro quidem, maxime aliquid quo natus iste obcaecati, iure recusandae.
            </div>

            <div className='border p-4 overflow-scroll h-[50px] w-full'>
                (Overflow Scroll) Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti quo odit sapiente rem quisquam numquam eum consequatur. Ratione vel, iste quas nostrum enim inventore asperiores id facilis aspernatur obcaecati tenetur incidunt velit voluptatem! Incidunt, adipisci aut voluptate velit excepturi a eligendi libero fuga quia doloremque, odio quasi ipsa labore voluptatibus ea ratione saepe deserunt dolor error, magnam odit itaque mollitia. Aperiam impedit veniam nostrum voluptates id praesentium animi quibusdam, fugit quisquam deserunt natus voluptatibus veritatis cupiditate, numquam, voluptatum rem tempora beatae? Voluptatem at, dolore ullam perferendis animi esse delectus porro quidem, maxime aliquid quo natus iste obcaecati, iure recusandae.
            </div>

            {/* Rest check out documentation for x and y respectivly */}
            <Footer />


            {/* <Heading title="Positions" />
            <div>
                <div className='fixed top-0 left-0 right-0 bg-gray-200 p-4'>
                    Fixed Content
                </div>
            </div>

            <div className='relative border p-4'>
                <div className='absolute top-0 left-0 bg-gray-200 p-2'>
                    Absolute Content
                </div>
            </div>

            <div className='relative border p-4'>
                <div className='relative top-4 left-4 bg-gray-200 p-2'>
                    Relative Content
                </div>
            </div>

            <div className='sticky top-0 bg-gray-200 p-4'>
                Sticky Content
            </div>
            <Footer /> */}


            {/* Z index */}
            <Heading title="Z-Index" />
            <div>
                <div className='relative bg-gray-300 p-4 z-30 top-3'>
                    <p className='text-lg'>Element 1 (Z-Index: 10)</p>
                </div>

                <div className='relative bg-gray-500 p-4 z-20'>
                    <p className='text-lg'>Element 2 (Z-Index: 20)</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout