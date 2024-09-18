import React from 'react'
import Button from '../components/Button';
import {arrowRight} from '../assets/icons'
import {shoes, statistics} from '../constants'
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';

const Hero = () => {
  return (
    <section id='home' className='w-full flex justify-center xl:flex-row flex-col min-h-screen gap-10 max-container'>

      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
      <p className='text-xl font-medium text-red-600'>Our Summar Collections</p>
      <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold'>
        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
        <br />
        <span className='text-red-500 inline-block mt-3'>Nike</span>  Shoes
       
      </h1>
      <p className='font-medium text-slate-500 text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort and innovation for your active life.</p>
      <Button label="Shop Now" iconURL={arrowRight}/>
      <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
        {statistics.map((statistic, index) => (
          <div key={index}>
            <p className='text-4xl font-mono font-bold'>{statistic.value}</p>
            <p className='leading-7 font-mono text-slate-500'>{statistic.label}</p>
            </div>
        )

        )}

      </div>

     

      </div>
      <div className='flex-1 flex justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoe1} alt="Shoes" width={610} height={500} className='object-contain z-10 relative' />
      </div>

      <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
  {shoes.map((shoe) => (
    <div key={shoe}>
    <ShoeCard 
    imgURL = {shoe}
    changeBigShoeimage={() => {

    }}
    bigShoeImage = ''
    />
    </div>
  ))}
</div>


    </section>
  )
}

export default Hero