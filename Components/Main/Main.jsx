import React, { useEffect } from 'react';
import './Main.css';
import img from '../../assets/img.jpg';
import img2 from '../../assets/img2.jpg'; 
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import {HiOutlineLocationMarker } from 'react-icons/hi';
import {HiOutlineClipboardCheck } from 'react-icons/hi';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
  {
    id:1,
    imgSrc:img,
    destTitle:'Tokyo',
    location:"JAPAN",
    garde:'URBAN MODERN',
    fees:'₹105000',
    description:'City with a perfect mix of tradition and tech'
  },
  {
    id:2,
    imgSrc:img2,
    destTitle: 'Paris',
    location: "France",
    garde: 'ROMANTIC CITY',
    fees: '₹76200',
    description: 'Home to the Eiffel Tower and rich culture.'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Singapore',
    location: 'Singapore',
    garde: 'CITY NIGHTLIFE',
    fees: '₹85000',
    description: 'A global hub with stunning architecture, shopping, and vibrant nightlife.'
  },
  {
  id: 4,
  imgSrc: img4,
  destTitle: 'New York',
  location: 'United States',
  garde: 'CITY LIFE',
  fees: '₹95000',
  description: 'The city that never sleeps, with iconic landmarks and vibrant culture.'
},
{
    id: 5,
    imgSrc: img5,
    destTitle: 'Varanasi',
    location: 'India',
    garde: 'SPIRITUAL CULTURE',
    fees: '₹35000',
    description: 'The spiritual heart of India, known for ghats and temples along the Ganges.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'London',
    location: 'United Kingdom',
    garde: 'HISTORIC MODERN',
    fees: '₹99000',
    description: 'A royal city with a blend of modern life and historical landmarks.'
  }
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[]);

  return (
    <section className='main container section'>
      <div  className='secTitle'>
        <h3 data-aos="fade-right" className='title'>
          Most Visited Destinations
        </h3>
      </div>

      <div className='secContent grid'>
        {
          Data.map(({id, imgSrc, destTitle,location, garde, fees, description})=>{
            return(
              <div key={id} data-aos="fade-up" className='singleDestionation'>

                <div className='imageDiv'>
                  <img src={imgSrc} alt={destTitle}/>
                </div>

                <div className='cardInfo'>
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon'/>
                    <span className='name'>{location}</span>
                  </span>

                  <div className='fees flex'>
                    <div className='grade'>
                      <span>{garde} <small>+1</small></span>
                    </div>
                    <div className='price'>
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className='desc'>
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS<HiOutlineClipboardCheck className='icon'/>
                  </button>

                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main
