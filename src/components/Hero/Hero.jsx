import './Hero.css'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'
import {FaArrowAltCircleRight} from 'react-icons/fa'

const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
        <div className=' text-2xl text-slate-100 w-1/2'>“Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets Style."
        (And the last word will keep changing: Elegance, Minimalism, Comfort)</div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <FaArrowAltCircleRight className=' text-6xl' />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
          <p>See the video</p>
        </div>
      </div>
    </div>
    
  )
}

export default Hero