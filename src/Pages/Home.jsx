import React from 'react'
import { useState, useEffect } from 'react'
import Background from '../components/Background/Background'
import Hero from '../components/Hero/Hero'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Home = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
    let heroData = [
        {text1:"Dive Into", text2:"What you love!"},
        {text1:"indulge", text2:"Your Passion"},
        {text1:"Give Into", text2:"What you love!"},
      ]
      const [heroCount, setHeroCount] = useState(0);
      const [playStatus, setPlayStatus] = useState(false); 
    
      useEffect(()=>{
        setInterval(() => {
          setHeroCount((count)=>{return count ===2?0:count+1})
        }, 3000);
      },[])
    
      return (
        <div>
          <div className="my-10">
          <Background playStatus={playStatus} heroCount={heroCount} />
          <Hero
            setPlayStatus={setPlayStatus}
            heroData={heroData[heroCount]}
            heroCount={heroCount}
            setHeroCount={setHeroCount}
            playStatus={playStatus}
          />
          </div>

           <div className="container mx-auto py-8 bg-white my-10">
      <Slider {...carouselSettings}>
        <div>
          <CarouselItem
            title="LFP Battery"
            description="Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn't stop there—our technology goes the extra mile in ensuring the battery's lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!"
          />
        </div>
        <div>
          <CarouselItem
            title="Wider tyres"
            description="Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand."
          />
        </div>
        <div>
          <CarouselItem
            title="Range prediction"
            description="Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery."
          />
        </div>
        <div>
          <CarouselItem
            title="Extraordinary Experience"
            description="Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!"
          />
        </div>
        <div>
          <CarouselItem
            title="Rugged and simple Design"
            description="We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not take a test ride?"
          />
        </div>
      </Slider>
    </div>

        </div>
      )
}
const CarouselItem = ({ title, description }) => (
  <div className="px-4 py-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
    <p className="text-gray-700">{description}</p>
    <a href="#" className="text-blue-500 hover:underline inline-block mt-4">
      Click here to locate your nearest dealership or book a test ride at your home
    </a>
  </div>
);
export default Home
