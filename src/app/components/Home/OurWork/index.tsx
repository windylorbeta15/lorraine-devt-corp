'use client'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Link from 'next/link'
import { useEffect, useLayoutEffect, useState } from 'react'
import GalleryImagesSkeleton from '../../Skeleton/GalleryImages'
import { GalleryImagesType } from '@/app/types/galleryimage'

const GALLERY_TILE_SHORT_HEIGHT = 330
const GALLERY_TILE_TALL_HEIGHT = 460

/** Masonry packs index 0,2,4… into column 0 and 1,3,5… into column 1 — vary by row so left↔right alternates. */
function galleryTileHeightPx(index: number, columnCount: number) {
  if (columnCount <= 1) {
    return index % 2 === 0
      ? GALLERY_TILE_SHORT_HEIGHT
      : GALLERY_TILE_TALL_HEIGHT
  }
  const rowInColumn = Math.floor(index / columnCount)
  const col = index % columnCount
  const isShort =
    col === 0 ? rowInColumn % 2 === 0 : rowInColumn % 2 === 1
  return isShort ? GALLERY_TILE_SHORT_HEIGHT : GALLERY_TILE_TALL_HEIGHT
}

const MASONRY_ONE_COL_MQ = '(max-width: 500px)'

const OurWork = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImagesType[]>([])
  const [loading, setLoading] = useState(true)
  const [masonryColumnCount, setMasonryColumnCount] = useState(2)

  useLayoutEffect(() => {
    const mq = window.matchMedia(MASONRY_ONE_COL_MQ)
    const sync = () => setMasonryColumnCount(mq.matches ? 1 : 2)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setGalleryImages(data.GalleryImagesData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='ourwork' className='scroll-mt-20'>
      <div className='container py-20'>
        <div className='text-center'>
          <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>
            Our Work
          </p>
          <h2 className='text-avocado-skin'>Driving Progress in Farming, Fisheries, and Beyond</h2>
        </div>
        <div className='my-16 px-6'>
          <Masonry
            breakpointCols={{ default: 2, '700': 2, '500': 1 }}
            className='flex gap-6'
            columnClassName='masonry-column'>
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <GalleryImagesSkeleton key={i} />
                ))
              : galleryImages.map((item, index) => {
                  const tileHeight = galleryTileHeightPx(
                    index,
                    masonryColumnCount
                  )
                  return (
                  <div
                    key={index}
                    style={{ height: tileHeight }}
                    className='overflow-hidden rounded-3xl mb-6 relative group'>
                    <Image
                      src={item.src}
                      alt={`${item.name}. ${item.description}`}
                      fill
                      sizes='(max-width: 500px) 100vw, 50vw'
                      className='object-cover'
                    />
                    <div className='w-full h-full absolute backdrop-blur-sm bg-black/40 top-full group-hover:top-0 duration-500 lg:p-12 md:p-8 p-3.5 flex flex-col items-start lg:gap-8 gap-4 justify-end'>
                      <p className='text-white lg:text-2xl text-xl'>
                        {item.name}
                      </p>
                      <p className='text-white/90 lg:text-lg text-sm leading-snug'>
                        {item.description}
                      </p>
                      <div className='flex items-center justify-between w-full'>
                        <Link
                          href='#'
                          className='text-white rounded-full bg-primary border duration-300 border-primary py-2 lg:px-6 md:px-4 px-3 hover:bg-primary/40 hover:backdrop-blur-xs md:text-base text-sm'>
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                  )
                })}
          </Masonry>
        </div>
      </div>
    </section>
  )
}

export default OurWork
