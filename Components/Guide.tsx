import React from 'react'
import Image from 'next/image'

export const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Brew.</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/starter.png"
          alt="boat"
          width={10}
          height={10}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
      </div>
    </section>
  )
}
