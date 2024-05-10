import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from './Cards';
import axios from 'axios'

function Freebook() {

  const [book ,setBook]= useState([])
  useEffect(() => {
    const getBook = async()=>{
      try {
      const res = await axios.get("http://localhost:4001/book")
      const data= res.data.filter((data)=>data.catergory==='Free')
        setBook(data)
      } catch (error) {
        console.log(error)
        
      }
    }
    getBook()
  }, [])
  

   
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
   
   <>

   <div className='max-w-screen-2xl container mx-auto md:px-10 px-3 '>
   <div> <h1 className='font-semibold text-xl pb-5 '>Free Book Catergory </h1>
    <p>"When I walk into a bookstore, any bookstore, I always feel at home." - Valerie Simpson

"A bookstore is one of the only pieces of evidence we have that people are still thinking." - Jerry Seinfeld</p>
       </div>

   <div className="my-10 mx-20">
      <Slider {...settings}>
        {book.map((item)=>(
            <Cards item={item} key={item.id}></Cards>
        ))}
      </Slider>
    </div>
    </div>
   </>
  )
}

export default Freebook
