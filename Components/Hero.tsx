import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Welcome to the Brewing Grounds</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want all of you to drink to a new day!
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Our Brews" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[700px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
        <Image 
          src="/Beer.jpg"
          alt="star"
          width={10000}
          height={1000}
        />
           <div className="flex flex-col">
            <p className="bold-20 text-white">Our Featured Brews</p>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Clasic Ginger Beer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
            }
export default Hero