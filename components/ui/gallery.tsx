'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface GalleryProps {
  images: string[]
  templateName: string
}

export function Gallery({ images, templateName }: GalleryProps) {
  return (
    <>
      <style jsx global>{`
        .mySwiper2 {
          /* 16:10 aspect ratio container */
          width: 100%;
          aspect-ratio: 16/10;
          max-height: 500px;
        }
        
        .mySwiper2 .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #f3f4f6;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .mySwiper2 .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover; /* Changed to cover for 16:10 images */
        }
        
        /* Navigation styling */
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          backdrop-filter: blur(4px);
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
        }
        
        /* Pagination styling */
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #3b82f6;
        }
      `}</style>

      <Swiper
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper2 rounded-lg overflow-hidden shadow-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img 
              src={image} 
              alt={`${templateName} ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
} 