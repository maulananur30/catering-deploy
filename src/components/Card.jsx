import React from 'react'
import './Card.css'
import john from './images/john-doe.png'
import paket1 from './images/paket1.jpg'
import paket2 from './images/paket2.jpg'
import paket3 from './images/paket3.jpg'
import fullstar from './images/star.svg'
import halfstar from './images/half-star.svg'
import emptystar from './images/empty-star.svg'
import love from './images/love.svg'
import eye from './images/eye.svg'

const Card = () => {
  return (
    <div className='card-product' id='card-product'>
      <div className='title-page-product'>
        <h2>Testimonials</h2>
        <span className='line'></span>
      </div>
        <div className='container h-screen flex items-center justify-center gap-10'>
            {/* ITEM 1 */}
            <div className='card-item w-80'>
              <img
                className='w-full h-full object-cover'
                src={paket1} 
                alt='paket1'
              />

              <div className='p-5 flex flex-col gap-3'>
                
                {/* badge */}
                <div className='flex items-center gap-2'>
                  <span className='badge'>Stock Ready</span>
                  <span className='badge'>offcial store</span>
                </div>

                {/* product title */}
                <h2 className='product-title' title='paket-1'>
                  Paket 1
                </h2>

                {/* Product price */}
                <div>
                  <span className='text-xl font-bold'>
                    RP 400.000
                  </span>
                  <div className='flex items-center gap-2 mt-1'>
                    <span className='text-sm line-through opacity-50'>
                      Rp 600.000
                    </span>
                    <span className='discount-percent'>
                      save 20%
                    </span>
                  </div>
                </div>

                {/* Product rating */}
                <span className='flex items-center mt-1 px-0'>
                  <img src={fullstar} />
                  <img src={fullstar} />
                  <img src={fullstar} />
                  <img src={halfstar} />
                  <img src={emptystar} />
                  <span className='text-xs ml-2 text-gray-500'>
                    20k reviews
                  </span>
                </span>

                {/* Product action button */}
                <div className='mt-5 flex gap-1'>
                  <button className='button-primary'>
                    Pesan sekarang
                  </button>
                  <button className='button-icon'>
                    <img className='opacity-50'
                      src={love} 
                      alt='add to whishlist'
                    />
                  </button>
                  <button className='button-icon'>
                    <img className='opacity-50'
                      src={eye} 
                      alt='show details'
                    />
                  </button>
                </div>
              </div>

            </div>

            {/* ITEM 2 */}
            <div className='card-item w-80'>
              <img
                className='w-full h-full object-cover'
                src={paket2} 
                alt='paket2'
              />

              <div className='p-5 flex flex-col gap-3'>
                
                {/* badge */}
                <div className='flex items-center gap-2'>
                  <span className='badge'>Stock Ready</span>
                  <span className='badge'>offcial store</span>
                </div>

                {/* product title */}
                <h2 className='product-title' title='paket-2'>
                  Paket 2
                </h2>

                {/* Product price */}
                <div>
                  <span className='text-xl font-bold'>
                    RP 400.000
                  </span>
                  <div className='flex items-center gap-2 mt-1'>
                    <span className='text-sm line-through opacity-50'>
                      Rp 600.000
                    </span>
                    <span className='discount-percent'>
                      save 20%
                    </span>
                  </div>
                </div>

                {/* Product rating */}
                <span className='flex items-center mt-1 px-0'>
                  <img src={fullstar} />
                  <img src={fullstar} />
                  <img src={fullstar} />
                  <img src={halfstar} />
                  <img src={emptystar} />
                  <span className='text-xs ml-2 text-gray-500'>
                    20k reviews
                  </span>
                </span>

                {/* Product action button */}
                <div className='mt-5 flex gap-1'>
                  <button className='button-primary'>
                    Pesan sekarang
                  </button>
                  <button className='button-icon'>
                    <img className='opacity-50'
                      src={love} 
                      alt='add to whishlist'
                    />
                  </button>
                  <button className='button-icon'>
                    <img className='opacity-50'
                      src={eye} 
                      alt='show details'
                    />
                  </button>
                </div>
              </div>

            </div>

            {/* ITEM 3 */}
            <div className='card-item w-80'>
              <img
                className='w-full h-full object-cover'
                src={paket3} 
                alt='paket3'
              />

              <div className='p-5 flex flex-col gap-3'>
                
                {/* badge */}
                <div className='flex items-center gap-2'>
                  <span className='badge'>Stock Ready</span>
                  <span className='badge'>offcial store</span>
                </div>

                {/* product title */}
                <h2 className='product-title' title='paket-3'>
                  Paket 3
                </h2>

                {/* Product price */}
                <div>
                  <span className='text-xl font-bold'>
                    RP 400.000
                  </span>
                  <div className='flex items-center gap-2 mt-1'>
                    <span className='text-sm line-through opacity-50'>
                      Rp 600.000
                    </span>
                    <span className='discount-percent'>
                      save 20%
                    </span>
                  </div>
                </div>

                {/* Product rating */}
                <span className='flex items-center mt-1 px-0'>
                  <img src={fullstar} />
                  <img src={fullstar} />
                  <img src={fullstar} />
                  <img src={halfstar} />
                  <img src={emptystar} />
                  <span className='text-xs ml-2 text-gray-500'>
                    20k reviews
                  </span>
                </span>

                {/* Product action button */}
                <div className='mt-5 flex gap-1'>
                  <button className='button-primary'>
                    Pesan sekarang
                  </button>
                  <button className='button-icon'>
                    <img className='opacity-50'
                      src={love} 
                      alt='add to whishlist'
                    />
                  </button>
                  <button className='button-icon'>
                    <img className='opacity-50'
                      src={eye} 
                      alt='show details'
                    />
                  </button>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Card