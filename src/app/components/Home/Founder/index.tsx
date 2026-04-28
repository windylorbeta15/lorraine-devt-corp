'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FounderType } from '@/app/types/founder'
import ChiefDetailSkeleton from '../../Skeleton/ChiefDetail'

const Founder = () => {
  const [founderDetail, setFounderDetail] = useState<FounderType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFounderDetail(data.FounderData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section className='bg-white-onion'>
      <div className='container my-20'>
        <div className='text-center'>
          <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>
          The Founders
          </p>
          <h2 className='text-avocado-skin'>Excellence in leadership</h2>
        </div>
        <div className='grid grid-cols-1 min-[800px]:grid-cols-2 min-[1200px]:grid-cols-2 gap-4'>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <ChiefDetailSkeleton key={i} />
              ))
            : founderDetail.map((items, i) => {
                const profileCard = (
                  <div className='m-3 my-10 p-10 text-center backdrop-blur-md bg-white/50 rounded-3xl shrink-0'>
                    <div className='relative'>
                      <Image
                        src={items.imgSrc}
                        alt='gaby'
                        width={362}
                        height={262}
                        className='inline-block m-auto w-auto'
                      />
                    </div>
                    <div className='mt-16'>
                      <h3 className='text-2xl font-semibold text-black'>
                        {items.name}
                      </h3>
                      <h4 className='text-lg font-normal text-black/50 opacity-50'>
                        {items.profession}
                      </h4>
                    </div>
                  </div>
                )

                const outsideParagraph = items.outsideText ? (
                  <p
                    className={`mb-6 mx-3 text-sm leading-relaxed text-black/60 lg:mb-0 lg:mx-0 lg:flex-1 lg:self-center ${
                      items.outsideTextSide === 'right'
                        ? 'text-right'
                        : 'text-left'
                    } ${
                      items.outsideTextSide
                        ? ''
                        : '-mt-6 text-center'
                    }`}
                  >
                    {items.outsideText}
                  </p>
                ) : null

                return (
                  <div key={i}>
                    {items.outsideText && items.outsideTextSide ? (
                      <div className='flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-6'>
                        {items.outsideTextSide === 'left' ? (
                          <>
                            {outsideParagraph}
                            {profileCard}
                          </>
                        ) : (
                          <>
                            {profileCard}
                            {outsideParagraph}
                          </>
                        )}
                      </div>
                    ) : (
                      <div className='flex flex-col'>
                        {profileCard}
                        {outsideParagraph}
                      </div>
                    )}
                  </div>
                )
              })}
        </div>
      </div>
    </section>
  )
}

export default Founder
