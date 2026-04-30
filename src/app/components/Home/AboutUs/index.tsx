'use client'

import Image from 'next/image'

const AboutUs = () => {
  return (
    <section className='relative p-0' id='aboutus'>
      <div className='container px-4'>
        <div className='absolute right-0 bottom-[-18%] xl:block hidden'>
          <Image
            src='/images/Overlay/rice-sack.png'
            alt='burger-image'
            width={380}
            height={500}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 space-x-5'>
          <div className='lg:col-span-6 flex lg:justify-start justify-center'>
            <Image
              src='/images/hero/banner-img.png'
              alt='nothing'
              width={636}
              height={808}
            />
          </div>
          <div className='lg:col-span-6 flex flex-col justify-center items-center lg:items-start'>
            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase lg:text-start text-center'>
              About Us
            </p>
            <h2 className='lg:text-start text-center'>
             Building Sustainable Solutions from Land to Sea
            </h2>
            <p className='text-black/50 text-lg font-normal my-5 text-start'>
            We are a dynamic enterprise engaged in agriculture, aquaculture,
             and integrated business operations, committed to cultivating high-quality products and sustainable resources. 
             From managing farmlands and ranches to advancing fish culture and production, we continuously invest in innovation, research, 
             and efficient practices to ensure productivity and long-term growth.
            </p>
            <p className='text-black/50 text-lg font-normal mb-10 text-start'>
            Guided by excellence and integrity, we strive to create value across every stage from cultivation
             and harvest to service and experience,delivering not just products, but a commitment to sustainability and progress.
            </p>
            <button className='text-xl font-medium rounded-full text-white py-3 px-8 duration-300 bg-primary w-fit border border-primary hover:bg-transparent hover:text-primary hover:cursor-pointer'>
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
